import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import Logo from '@/assets/images/logo.png';

import Section from '@/components/Section';
import SmoothCircleTimer from '@/components/SmoothCircleTimer';
import TimerComponent from '@/components/TimerComponent';
import Button from '@/components/core/Buttons';
import Spacer from '@/components/core/Spacer';
import { Text } from '@/components/core/Text';
import CircleProgressBar from '@/components/test/CircleProgressBar';

import useTimer from '@/hooks/useTimer';

const lendingTimerTime = 3000;

export default function HomePage() {
  const navigate = useNavigate();
  const { minutes, seconds, timer, startTimer, pauseTimer } =
    useTimer(lendingTimerTime);

  const mainTimerText = `${minutes}분 ${seconds}초`;

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      pauseTimer();
      alert('타이머가 종료되었습니다');
    }
  }, [timer]);

  return (
    <Container>
      <LogoImage src={Logo} />
      <Spacer top={20} />
      <Wrapper>
        <Text typography="h1">TimeFight</Text>
        <Text typography="h3">나만의 개인 맞춤 타이머</Text>
        <Text typography="h5">
          {`이 간단하고 효율적인 타이머로 집중력을 유지하고 생산성을 높이세요.
          전용시간이 필요한 모든 작업에 사용하세요.`}
        </Text>
      </Wrapper>
      <Section
        index={0}
        title="Revolutionary Camera"
        description="Capture life's moments with unprecedented clarity and detail. Our advanced camera system brings professional-grade photography to your fingertips."
        imageSrc="/api/placeholder/600/400"
      />
      <Section
        index={1}
        title="Unmatched Performance"
        description="Powered by our latest chip, iPhone delivers lightning-fast performance for all your tasks and apps, while maintaining excellent energy efficiency."
        imageSrc="/api/placeholder/600/400"
      />
      <Section
        index={2}
        title="Stunning Design"
        description="Elegance meets durability in our sleek, modern design. Crafted from premium materials, iPhone is not just a device, it's a statement."
        imageSrc="/api/placeholder/600/400"
      />
      {/* <Spacer top={20} /> */}
      {/* <TimerComponent
        showcircle={true}
        percentage={Math.floor(Number(timer / lendingTimerTime) * 100)}
        text={mainTimerText}
      /> */}
      {/* <SmoothCircleTimer
        percentage={Math.floor(Number(timer / lendingTimerTime) * 100)}
        duration={300}
        fullSize
        backgroundColor="#e0e0e0"
        progressColor="#4caf50"
        textColor="#e0e0e0"
        text={mainTimerText}
      />
      <ButtonWrap>
        <Button onClick={() => navigate('/main')}>시작하기</Button>
      </ButtonWrap> */}
    </Container>
  );
}

const Container = tw.div`
  // flex 
  // flex-col 
  // justify-center 
  // items-center 
  h-full
  // w-full
  // text-center
  // p-8
  // mt-12
  // overflow-auto
  p-8
`;

const Wrapper = tw.div`
  flex
  flex-col
`;

const ButtonWrap = tw.div`
  min-w-[300px]
`;

const BtnWrap = tw.div`flex w-1/2 gap-3`;

const LogoImage = tw.img`
  h-64
`;
