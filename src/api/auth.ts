import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

import { auth } from '../firebase';
import { createUserDoc, getUserDoc } from './main';

class FirebaseError extends Error {
  code: string;
  constructor(originalError: any) {
    super(originalError.message);
    this.code = originalError.code;
    this.name = 'FirebaseError';
  }
}

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

    console.log('googleuser', googleUser);
    console.log('credential', credential);

    if (credential?.isNewUser) {
      const user = await createUserDoc({
        user_uid: googleUser.user.uid,
        email: credential.profile.email,
        nickName: credential.profile.name,
        goal: '',
        // photo: googleUser.user.photoURL,
      });
      return user;
    } else {
      return getUserDoc(googleUser.user.uid);
    }
  } catch (error: any) {
    throw new FirebaseError(error);
  }
};

// github Auth
const githubAuth = async () => {
  try {
    const provider = new GithubAuthProvider(); // provider 깃허브 설정
    const githubUser = await signInWithPopup(auth, provider);

    const credential = getAdditionalUserInfo(githubUser);

    if (credential?.isNewUser) {
      const user = await createUserDoc({
        user_uid: githubUser.user.uid,
        email: githubUser.user.email,
        nickName: githubUser.user.displayName,
        goal: '',
        // photo: githubUser.user.photoURL,
      });
      return user;
    } else {
      return getUserDoc(githubUser.user.uid);
    }
  } catch (error) {
    throw new FirebaseError(error);
  }
};

export {
  createUserEmail,
  loginUserEmail,
  emailVerification,
  googleAuth,
  githubAuth,
};
