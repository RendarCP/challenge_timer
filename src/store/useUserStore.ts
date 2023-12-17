import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { IUser } from '../types/userType';

const store = (set, get) => ({
  user: {},
  getUser: (user: IUser) => {
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
      'auth_user'
    );
  },
});

// const useUserStore = create(devtools(persist(store, { name: 'user' })));
const useUserStore = create(devtools(store, { name: 'user' }));

export { useUserStore };
