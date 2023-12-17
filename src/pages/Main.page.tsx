import TimerComponent from '../components/TimerComponent';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import useTimer from '../hooks/useTimer';

import Logo from '../assets/images/logo.png';
import Button from '../components/core/Buttons';
import Spacer from '../components/core/Spacer';
import { Text } from '../components/core/Text';

export default function MainPage() {
  const navigate = useNavigate();
  const { minutes, seconds, timer, startTimer, pauseTimer } = useTimer(30000);

  const mainTimerText = `${minutes}분 ${seconds}초`;

  return (
    <Container>
      <div>
        <LogoImage src={Logo} />
      </div>
      <Spacer top={20} />
      <Wrapper>
        <Text typography="h1">Challenge Timer</Text>
        <Text typography="h3">나만의 개인 맞춤 타이머</Text>
        <Text typography="h5">
          {`이 간단하고 효율적인 타이머로 집중력을 유지하고 생산성을 높이세요.
          전용시간이 필요한 모든 작업에 사용하세요.`}
        </Text>
      </Wrapper>
      <Spacer top={20} />
      <TimerComponent
        text={mainTimerText}
        percentage={Math.floor(Number(timer / 30000) * 100)}
      />
      <Spacer top={20} />
      <ButtonWrap>
        <Button onClick={startTimer}>시작하기</Button>
      </ButtonWrap>
      <BtnWrap>
        <Button onClick={() => navigate('/auth/login')}>로그인</Button>
        <Button onClick={() => navigate('/main/timer')}>타이머</Button>
        <Button onClick={() => navigate('/main/challenge/room')}>룸</Button>
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
  h-full
  w-full
  text-center
  p-8
  overflow-auto
`;

const Wrapper = tw.div`
  flex
  flex-col
`;

const ButtonWrap = tw.div`
  h-32 sm:h-48 md:h-64
  w-auto
  max-w-full
`;

const BtnWrap = tw.div`flex w-1/2 gap-3`;

const LogoImage = tw.img`
  h-64
`;
