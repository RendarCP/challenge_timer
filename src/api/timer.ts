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

class FirebaseError extends Error {
  code: string;
  constructor(originalError: any) {
    super(originalError.message);
    this.code = originalError.code;
    this.name = 'FirebaseError';
  }
}

const createSingleTimer = async ({ userUid, startTime, endTime }) => {
  try {
    const query = await addDoc(collection(firestore, 'timer'), {
      userUid,
      createDate: new Date(),
      updateDate: new Date(),
      timerStartTime: startTime,
      timerEndTime: endTime,
    });

    if (query) {
      return query;
    }
  } catch (error: any) {
    throw new FirebaseError(error);
  }
};

export { createSingleTimer };
