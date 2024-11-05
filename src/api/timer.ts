import { Dayjs } from 'dayjs';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';

import { firestore } from '../firebase/index';

class FirebaseError extends Error {
  code: string;
  constructor(originalError: any) {
    super(originalError.message);
    this.code = originalError.code;
    this.name = 'FirebaseError';
  }
}

interface ICreateSingleTimer {
  userUid: string;
  startTime: Date;
  endTime: Date | null;
  realEndTime: Date | null;
  percentageBaseDay: Number | string; // 24시간 기준 설정된 값이 몇퍼인지
  settingTime: number; // 초단위 설정
  endTimer: number | null; // 종료이후 남은 시간 (초단위) => 0일수 있음
  finish?: boolean; // 종료인지 아닌지 판별
}

const createSingleTimer = async ({
  userUid,
  startTime,
  endTime,
  realEndTime,
  percentageBaseDay,
  settingTime,
  endTimer,
}: ICreateSingleTimer) => {
  try {
    const query = await addDoc(collection(firestore, 'timer'), {
      userUid,
      createDate: new Date(),
      updateDate: new Date(),
      timerStartTime: startTime,
      timerEndTime: endTime,
      timerRealEndTime: realEndTime,
      percentageBaseDay,
      settingTime,
      endTimer,
      finish: false,
    });

    if (query) {
      return query;
    }
  } catch (error: any) {
    throw new FirebaseError(error);
  }
};

interface IUpdateTimer {
  docId: string | number;
  realEndTime: Date | null;
  endTimer: number | null; // 종료이후 남은 시간 (초단위) => 0일수 있음
  finish?: boolean; // 종료인지 아닌지 판별
}

const updateTimer = async ({
  docId,
  realEndTime,
  endTimer,
  finish,
}: IUpdateTimer) => {
  const updateRef = doc(firestore, 'timer', `${docId}`);
  try {
    const query = await updateDoc(updateRef, {
      createDate: new Date(),
      updateDate: new Date(),
      timerRealEndTime: realEndTime,
      endTimer,
      finish,
    });

    if (query) {
      return query;
    }
  } catch (error: any) {
    throw new FirebaseError(error);
  }
};

const getUserTimer = async ({ docId }: { docId: string }) => {
  try {
    const timer = doc(firestore, 'timer', docId);
    const roomSnapShot = await getDoc(timer);

    if (roomSnapShot.exists()) {
      return roomSnapShot.data();
    }
    throw new Error('fail');
  } catch (error: any) {
    throw new FirebaseError(error);
  }
};

export { createSingleTimer, updateTimer, getUserTimer };
