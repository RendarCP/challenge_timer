import { onAuthStateChanged } from 'firebase/auth';
// eslint-disable-next-line import/named
import React, { useEffect, useState } from 'react';

import { getUserDoc } from '../api/main';
import { auth } from '../firebase';
import { useUserStore } from '../store/useUserStore';

export const useUserCheck = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, user } = useUserStore();
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, async user => {
      console.log('auth', auth);
      console.log('user', user);
      if (user) {
        const uid: string = user.uid;
        const authUser = await getUserDoc(uid);
        setUser(authUser);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, []);
  return {
    user,
    setUser,
    isLoading,
  };
};
