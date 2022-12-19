import { ref } from 'vue'
import { message } from 'ant-design-vue'
import {
  uploadBytesResumable,
  ref as storageRef,
  getDownloadURL,
} from 'firebase/storage'
import { auth, storage } from '@/firebase'
import store from '@/store'

export default function useFile() {
  const reader = new FileReader()
  const fileBase64 = ref<string>('')
  const loading = ref<boolean>(false)

  function checkFile(file: File): boolean {
    const type = file.type === 'image/jpeg' || file.type === 'image/png'
    const extension = /\.(jpe?g|png)$/i.test(file.name)
    const size = file.size / 1024 / 1024 < 2

    if (!type || !extension) message.error('You can only upload jpg/jpeg/png file.')
    if (!size) message.error('The image must smaller than 2MB.')

    return type && extension && size
  }

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement

    if (target && target.files) {
      const file = target.files.item(0)

      if (file !== null) {
        if (!checkFile(file)) return
        if (reader.LOADING) loading.value = true

        reader.readAsDataURL(file)

        reader.onload = () => {
          fileBase64.value = reader.result as string
          uploadToFirebaseStorage(file)
          loading.value = false
        }

        reader.onerror = () => {
          message.error(`Upload: Error during reader's operation.`)
          loading.value = false
          return
        }
      }
    }
  }

  return {
    fileBase64,
    loading,
    handleChange,
  }
}

function uploadToFirebaseStorage(file: File) {
  const metadata = {
    contentType: file.type,
  }

  const fileName = (auth.currentUser?.uid || '') + file.name

  const imagesRef = storageRef(storage, `images/${fileName}`)

  const uploadTask = uploadBytesResumable(imagesRef, file, metadata)

  uploadTask.on(
    'state_changed',
    snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log('Upload is ' + progress + '% done')
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused')
          break
        case 'running':
          console.log('Upload is running')
          break
      }
    },
    error => {
      switch (error.code) {
        case 'storage/unauthorized':
          message.error(`Upload: User doesn't have permission to access the object.`)
          break
        case 'storage/canceled':
          message.warning('Upload: User canceled.')
          break
        case 'storage/unknown':
          message.error('Upload: Unknown error occurred.')
          break
      }
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
        console.log('File available at', downloadURL)
        store.dispatch('auth/updatePhotoURL', { url: downloadURL, fileName })
      })
    },
  )
}
