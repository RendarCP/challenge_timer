import { firestore } from '../firebase/index'
import { getDoc, doc } from "firebase/firestore";

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

export {
  getRoom
}