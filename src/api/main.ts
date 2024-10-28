import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

import { firestore } from '../firebase/index';
import type { IUserInfo } from '../types/apiType';

class FirebaseError extends Error {
  code: string;
  constructor(originalError: any) {
    super(originalError.message);
    this.code = originalError.code;
    this.name = 'FirebaseError';
  }
}

const getRoom = async (id: string) => {
  try {
    const room = doc(firestore, 'timer_room', id);
    const roomSnapShot = await getDoc(room);

    if (roomSnapShot.exists()) {
      return roomSnapShot.data();
    }
    throw new Error('fail');
  } catch (error: any) {
    throw new FirebaseError(error);
  }
};

const getRoomPersons = async (id: string) => {
  const q = query(
    collection(firestore, 'room_person'),
    where('room_id', '==', id)
  );
  try {
    const querySnapshot = await getDocs(q);

    const newData = querySnapshot.docs.map(doc => ({
      ...doc.data(),
    }));
    if (querySnapshot) {
      return newData;
    }
    throw new Error('fail');
  } catch (error: any) {
    throw new FirebaseError(error);
  }
};

// 유저 데이터 베이스 생성
const createUserDoc = async ({
  user_uid,
  email,
  nickName,
  // userName,
  goal,
}: IUserInfo) => {
  try {
    const setQuery = await addDoc(collection(firestore, 'users'), {
      user_uid: user_uid,
      user_email: email,
      // user_name: userName,
      user_goal: goal,
      user_nickname: nickName,
      create_date: new Date(),
      update_date: new Date(),
      user_exp: 0,
    });

    if (setQuery) {
      return setQuery;
    }
  } catch (error: any) {
    throw new FirebaseError(error);
  }
};

// 유저 정보 가져오기
const getUserDoc = async (uid: string) => {
  try {
    const q = query(
      collection(firestore, 'users'),
      where('user_uid', '==', uid)
    );
    const querySnapshot = await getDocs(q);

    // const newData = querySnapshot.docs.map(doc => ({
    //   ...doc.data(),
    // }));
    const newData = querySnapshot.docs[0]?.data();
    if (querySnapshot) {
      return newData;
    }
    throw new Error('fail');
  } catch (error: any) {
    throw new FirebaseError(error);
  }
};

export { getRoom, getRoomPersons, createUserDoc, getUserDoc };
