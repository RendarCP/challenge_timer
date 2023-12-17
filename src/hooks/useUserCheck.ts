import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';

import { getUserDoc } from '../api/main';

import { auth } from '../firebase';
import { useUserStore } from '../store/useUserStore';

export const useUserCheck = () => {
  const { getUser } = useUserStore();
  useEffect(() => {
    onAuthStateChanged(auth, async user => {
      if (user) {
        const uid = user.uid;
        const authUser = await getUserDoc(uid);
        getUser(authUser);
      }
    });
  }, []);
};
