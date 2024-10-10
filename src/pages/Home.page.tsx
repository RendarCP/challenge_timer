import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import Logo from '@/assets/images/logo.png';

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
      <Spacer top={20} />
      <TimerComponent
        showcircle={true}
        percentage={Math.floor(Number(timer / lendingTimerTime) * 100)}
        text={mainTimerText}
      />
      <CircleProgressBar
        percentage={Math.floor(Number(timer / lendingTimerTime) * 100)}
        text={mainTimerText}
        fullSize
        backgroundColor="#e0e0de"
        progressColor="#3498db"
      />
      <Spacer top={20} />
      <ButtonWrap>
        <Button onClick={() => navigate('/main')}>시작하기</Button>
      </ButtonWrap>
      {/* The button to open modal */}
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
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
