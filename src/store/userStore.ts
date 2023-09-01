import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserState {
  isLogin: boolean;
  user_nickname: string;
  user_email: string;
  user_code: string;
}

const store = (set, get) => ({
  userInfo: {},
  loginUserInfo: info => {
    set(
      state => ({
        userInfo: {
          ...state.userInfo,
          isLogin: true,
          uid: info.user_uid,
          user_nickname: info.user_nickname,
          user_email: info.user_email,
        },
      }),
      false,
      'loginUserInfo'
    );
  },
});

const useUserInfo = create(devtools(persist(store, { name: 'userInfo' })));

export { useUserInfo };
