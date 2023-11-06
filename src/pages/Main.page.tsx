import React from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import Button from '../components/core/Buttons';
import { Text } from '../components/core/Text';
import { useUserStore } from '../store/useUserStore';

export default function MainPage() {
  const navigate = useNavigate();
  const { user } = useUserStore();
  return (
    <Container>
      <Text typography="h3">Challenage_Timer</Text>
      <BtnWrap>
        <Button onClick={() => navigate('/auth/login')}>로그인</Button>
        <Button onClick={() => navigate('/main/timer')}>타이머</Button>
        <Button onClick={() => navigate('/auth/signup')}>회원가입</Button>
      </BtnWrap>
    </Container>
  );
}

const Container = tw.div`
  flex 
  flex-col 
  justify-center 
  items-center 
  gap-5 
  h-full
  w-full
`;

const BtnWrap = tw.div`flex w-1/2 gap-3`;
