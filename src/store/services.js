import {db} from '../firebase'

export default {
  fetchRooms() {
    return db.collection('rooms').get();
  },
  fetchRoom(id) {
    return db.collection('rooms').doc(id).get();
  },
  createRoom(data) {
    return db.collection('rooms').add(data);
  },
  deleteRoom(id) {
    return db.collection('rooms').doc(id).delete();
  },
  updateTitleRoom(data) {
    const {id, title} = data;
    return db.collection('rooms').doc(id).update({title: title});
  }
}
