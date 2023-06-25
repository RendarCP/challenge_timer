import { auth, firestore } from '../firebase/index'
import { getDoc, doc, query, collection, where, getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword } from 'firebase/auth';

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
    
    const newData = querySnapshot.docs.map(doc => ({
      ...doc.data()
    }));
    if(querySnapshot){
      return newData
    }
    throw new Error('fail');
  }
    catch (error: any) {
    throw new Error(error);
  }
}

const createUserEmail =async (id: string, password: string) => {
  try {
    const signUp = createUserWithEmailAndPassword(auth, id, password);
    
    if(signUp){
      return signUp
    }
  } catch (error: any){
    throw new Error(error);
  }
}

export {
  getRoom,
  getRoomPersons,
  createUserEmail
}