import { onAuthStateChanged } from 'firebase/auth';
import _ from 'lodash';
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
  const isUser = !_.isEmpty(user);
  return {
    user,
    setUser,
    isLoading,
    isUser,
  };
};
