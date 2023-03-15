import { firestore } from '../firebase/index'
import { getDoc, doc, query, collection, where, getDocs } from "firebase/firestore";

const getRoom = async (id: string) => {
  try {
    const room = doc(firestore, 'timer_room', id)
    const roomSnapShot = await getDoc(room);
  
    if(roomSnapShot.exists()){
      return roomSnapShot.data();
    }
    throw new Error('fail');
  }
  catch (error: any) {
    throw new Error(error);
  }
}

const getRoomPersons = async (id: string) => {
  const q = query(collection(firestore, "room_person"), where("room_id", "==", id));
  try {
    const querySnapshot = await getDocs(q);
    const queryArray: any = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      queryArray.push(doc.data());
    });

    if(querySnapshot){
      return queryArray
    }
    throw new Error('fail');
  }
    catch (error: any) {
    throw new Error(error);
  }
}

export {
  getRoom,
  getRoomPersons
}