import React, { useEffect, useState } from 'react';
import tw, { css } from 'twin.macro';
import styled from '@emotion/styled';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import { toast } from 'react-toastify';
import TimerComponent from '../components/TimerComponent';
import useClock from '../hooks/useClock';
import useTimer from '../hooks/useTimer';
import Loading from '../components/Loading';
import Input from '../components/core/Input';

dayjs.locale('ko');
// dayjs.extend(localizedFormat);

export default function Timer() {
  const [user, setUser] = useState('');
  const [show, setShow] = useState(false);
  const [start, setStart] = useState<Dayjs | null | Date>(null);
  const [end, setEnd] = useState<Dayjs | null | Date>(null);
  // const { hours, minutes, seconds } = useClock();
  const {
    timer,
    milliseconds: stMilli,
    seconds: stSeconds,
    minutes: stMinutes,
    hours: stHours,
    startTimer: onActive,
    pauseTimer: onPause,
    isPause,
    isTimerRunning: isActive,
  } = useTimer();

  const TText = `${stHours}시간 ${stMinutes}분 ${stSeconds}초`;

  useEffect(() => {
    const storage = localStorage.getItem('challenge_timer');
    if (storage !== null) {
      const userDate = JSON.parse(storage);
      if (userDate.name) {
        setUser(userDate.name);
        setStart(userDate.startTime);
        setShow(true);
      }
    }
  }, []);

  const handleStart = () => {
    if (user === '') {
      toast.error('이름은 필수 값입니다');
    } else {
      setShow(true);
      setStart(new Date());
      onPause();
      localStorage.setItem(
        'challenge_timer',
        JSON.stringify({ name: user, startTime: new Date() })
      );
    }
  };

  const handlePause = () => {
    onPause();
    localStorage.setItem(
      'challenge_timer_stopWatch',
      JSON.stringify({
        stopwatch: timer,
      })
    );
  };

  const handleTimer = () => {
    if (isActive) {
      onPause();
      // localStorage.setItem(
      //   'challenge_timer_stopWatch',
      //   JSON.stringify({
      //     stopwatch: timer,
      //   })
      // );
    } else {
      onActive();
      // localStorage.setItem(
      //   'challenge_timer_stopWatch',
      //   JSON.stringify({
      //     stopwatch: 0,
      //   })
      // );
    }
  };

  const handleEnd = () => {
    setEnd(new Date());
    localStorage.setItem(
      'challenge_timer',
      JSON.stringify({ name: user, startTime: start, lastDate: new Date() })
    );
  };

  const handleChange = (e: any) => {
    setUser(e.target.value);
  };

  return (
    <Container>
      <HeaderTitle>타이머</HeaderTitle>
      {!show ? (
        <>
          <FlexWrap>
            <Label>이름</Label>
            <Input value={user} onChange={handleChange} />
          </FlexWrap>
          <div style={{ marginTop: 20 }} />
          <Button onClick={handleStart}>저장후 시작</Button>
        </>
      ) : (
        <>
          <UserLabel size={20}>{user}님</UserLabel>
          <div style={{ display: 'flex', gap: 20 }}>
            {/* <Button onClick={handlePause}>{isActive ? '정지' : '재개'}</Button> */}
            <Button onClick={handleTimer}>{isActive ? '정지' : '재개'}</Button>
            <Button onClick={handleEnd}>종료</Button>
          </div>
          {/* <div style={{ padding: 50 }}>
            <TimerWrap>
              <TimerText>
                {hours}시 {minutes}분 {seconds}초
              </TimerText>
              <div
                style={{
                  position: 'absolute',
                  top: '-17px',
                  left: '17px',
                  padding: 5,
                  background: 'white',
                }}
              >
                현재 시간
              </div>
            </TimerWrap>
            <TimerWrap>
              <TimerText>
                {dayjs(start).format('MM월 DD일 HH 시 mm 분')}
              </TimerText>
              <div
                style={{
                  position: 'absolute',
                  top: '-17px',
                  left: '17px',
                  padding: 5,
                  background: 'white',
                }}
              >
                시작 시간
              </div>
            </TimerWrap>
          </div> */}

          <TimerComponent time={start} text={TText} seconds={stSeconds} />
          {/* <Loading /> */}
        </>
      )}
    </Container>
  );
}

const Container = tw.div`
  flex
  flex-col
  justify-center
  items-center
  h-full
`;

const FlexWrap = tw.div`
  flex
  flex-col
`;

const HeaderTitle = tw.h1`
  // text-2xl
  font-bold
  [font-size: 50px]
`;

const Button = tw.button`
  border-2
  rounded-lg
  px-6
  py-2
`;

// const Input = tw.input`
//   border-2
//   rounded-lg
//   p-2
//   border-green-500
// `;

const Label = tw.label`
  text-sm
  text-gray-500
`;

const UserLabel = styled.div<{ size: string | number }>`
  font-size: ${props => props.size && props.size}px;
  ${tw`text-blue-300`}
`;

const TimerWrap = tw.div`
  flex
  flex-col
  items-center
  border-2
  rounded-lg 
  p-6
  mx-2.5
  relative
  mt-4
`;

const TimerText = tw.div`
  text-3xl
  font-bold
`;
