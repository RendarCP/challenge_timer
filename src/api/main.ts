import { auth, firestore } from '../firebase/index';
import {
  getDoc,
  doc,
  query,
  collection,
  where,
  getDocs,
  addDoc,
} from 'firebase/firestore';
import {
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
} from 'firebase/auth';
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

// 유저 생성
const createUserEmail = async (id: string, password: string) => {
  try {
    const signUp = createUserWithEmailAndPassword(auth, id, password);

    if (signUp) {
      return signUp;
    }
  } catch (error: any) {
    throw new FirebaseError(error);
  }
};

// 이메일 로그인
const loginUserEmail = async (email: string, password: string) => {
  try {
    const login = await signInWithEmailAndPassword(auth, email, password);

    console.log('login', login);
    if (login) {
      return getUserDoc(login.user.uid);
    }
  } catch (error: any) {
    console.log('error', error.code);
    // return error;
    throw new FirebaseError(error);
  }
};

// 이메일 인증
const emailVerification = async () => {
  try {
    const verification = sendEmailVerification(auth.currentUser as User);

    if (verification) {
      return verification;
    }
  } catch (error: any) {
    throw new FirebaseError(error);
  }
};

// GoogleAuth
const googleAuth = async () => {
  try {
    const provider = new GoogleAuthProvider(); // provider 구글 설정
    const googleUser = await signInWithPopup(auth, provider);

    const credential = getAdditionalUserInfo(googleUser);

    // console.log('googleuser', googleUser);
    // console.log('credential', credential);

    if (credential?.isNewUser) {
      const user = await createUserDoc({
        user_uid: googleUser.user.uid,
        email: credential.profile.email,
        nickName: credential.profile.name,
        goal: '',
      });
      return user;
    } else {
      return getUserDoc(googleUser.user.uid);
      // return true;
    }
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

export {
  getRoom,
  getRoomPersons,
  loginUserEmail,
  createUserEmail,
  emailVerification,
  googleAuth,
  createUserDoc,
  getUserDoc,
};
