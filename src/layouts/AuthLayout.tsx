import React from 'react';
import tw from 'twin.macro';
import { Outlet, useMatch } from 'react-router-dom';
import { Text } from '../components/core/Text';

const AuthContainer = tw.div`flex flex-col justify-center items-center w-full h-full`;

const AuthInner = tw.div`flex-auto xs:w-full sm:w-[500px] flex flex-col justify-center`;

const MainWarpper = tw.section`p-10 border-2 border-solid border-primary rounded-lg`;

const AuthLayout = () => {
  const match = useMatch('/auth/login');
  return (
    <AuthContainer>
      <AuthInner>
        <div>logo</div>
        <Text typography="h4">{match ? '로그인' : '회원가입'}</Text>
        <MainWarpper>
          <Outlet />
        </MainWarpper>
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
