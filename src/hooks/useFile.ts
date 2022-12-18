import { ref } from 'vue'
import { message } from 'ant-design-vue'

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
          loading.value = false
        }

        reader.onerror = () => {
          message.error('Upload error.')
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
