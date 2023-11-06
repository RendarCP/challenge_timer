import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { IUser } from '../types/userType';

const store = (set, get) => ({
  user: {},
  getUser: (user: IUser) => {
    console.log('user', user);
    set(
      (state: any) => ({
        user: {
          ...state.user,
          uid: user.user_uid,
          email: user.user_email,
          nickname: user.user_nickname,
          goal: user.user_goal,
          create_date: user.create_date,
          update_date: user.update_date,
          exp: user.user_exp,
        },
      }),
      false,
      'addItem'
    );
  },
});

const useUserStore = create(devtools(persist(store, { name: 'user' })));

export { useUserStore };
