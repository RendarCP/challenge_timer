import { useUserStore } from '@/store/useUserStore';
import React from 'react';
import { Outlet, useMatch, useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import Logo from '../assets/images/logo.png';
import { Text } from '../components/core/Text';

const AuthContainer = tw.div`flex flex-col justify-center items-center w-full h-screen`;

const AuthInner = tw.div`flex-auto xs:w-full sm:w-[500px] flex flex-col justify-center`;

const LogoWrapper = tw.div`flex flex-col justify-center items-center cursor-pointer`;

const MainWrapper = tw.section`p-10 border-2 border-solid border-primary rounded-lg`;

const LogoImage = tw.img`
  h-20
`;

const AuthLayout = () => {
  const match = useMatch('/auth/login');
  const navigate = useNavigate();

  return (
    <AuthContainer>
      <AuthInner>
        <LogoWrapper onClick={() => navigate('/')}>
          <LogoImage src={Logo} />
          <Text>Challenge Timer</Text>
        </LogoWrapper>
        <Text typography="h4" tw="text-center">
          {match ? '로그인' : '회원가입'}
        </Text>
        <MainWrapper>
          <Outlet />
        </MainWrapper>
      </AuthInner>
    </AuthContainer>
  );
};

export default AuthLayout;

// 이력 관리 차원 ----------> left container 랑 right 사진 있는 구조
// const AuthContainer = tw.div`flex w-full h-full`;

// const LeftWrapper = tw.section`border md:w-1/3 h-full border-blue-500 overflow-auto w-full`;

// const LeftHeader = tw.header`border border-orange-400 p-5`;

// const LeftCenterLogo = tw.div`border border-green-400 p-5`;

// const LeftContent = tw.div`flex flex-col gap-2 h-full justify-center border border-pink-400 py-10 md:px-20 px-12`;

// const RightWrapper = tw.section`border w-2/3 border-red-400 md:block hidden`;

// const AuthLayout = () => {
//   return (
//     <AuthContainer>
//       <LeftWrapper>
//         {/* <LeftHeader>여기는 로고가 들어갈자리임</LeftHeader> */}
//         <LeftContent>
//           <LeftCenterLogo>여기는 큰 로고가 들어갈 자리임</LeftCenterLogo>
//           <Outlet />
//         </LeftContent>
//       </LeftWrapper>
//       <RightWrapper>오른쪽임 이쪽에는 이미지가 들어감</RightWrapper>
//     </AuthContainer>
//   );
// };
