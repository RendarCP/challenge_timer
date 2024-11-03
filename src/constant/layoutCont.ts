const sideBarMenus = [
  // {
  //   title: '홈으로',
  //   path: '/',
  // },
  {
    title: '메인',
    path: '/main',
    activeList: ['/main'],
  },
  {
    title: 'Single',
    path: '/main/timer/single',
    activeList: [
      '/main/timer/single',
      '/main/timer/single/timer',
      '/main/timer/single/stopwatch',
      '/main/timer/single/analytics',
      '/main/timer/single/result',
    ],
  },
  {
    title: 'Challenge',
    path: '/main/challenge/room',
    activeList: ['/main/challenge/room'],
  },
  // {
  //   title: '타이머',
  //   path: '/main/timer',
  // },
  // {
  //   title: '테스트페이지',
  //   path: '/test',
  // },
  // {
  //   title: '테스트페이지2',
  //   path: '/main/test',
  // },
];

export { sideBarMenus };
