import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import useInterval from '../hooks/useInterval';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import CircleProgressBar from './CircleProgressBar';

const Container = tw.div`
  flex
`;

const TimerWrap = tw.div`
  flex
  flex-col
  items-center
  border-2
  rounded-lg 
  w-36
  p-6
  mx-2.5
`;

const TimerText = tw.div`
  text-3xl
  font-bold
`;

const AnimtaionContainer = styled('div')((props: any) => ({
  textAlign: 'right',
  transform: `translateX(${props.second}%)`,
  transition: 'all 500ms ease-out',
  borderRadius: '30%',
  padding: 20,
  border: '2px solid #f3f3f3',
  borderTop: '2px solid red',
  animation: `fadeout 3s linear infinite`,
  '@keyframes fadeout': {
    // from: {
    //   opacity: 1,
    // },
    // to: {
    //   opacity: 0,
    // },
    '0%': {
      transform: 'rotate(0deg)',
    },
    '25%': {
      transform: 'rotate(90deg)',
    },
    '50%': {
      transform: 'rotate(180deg)',
    },
    '75%': {
      transform: 'rotate(270deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));

export default function TimerComponent() {
  const [timer, setTimer] = useState(new Date());

  useInterval(() => {
    setTimer(new Date());
  }, 1000);

  const hours = dayjs(timer).format('HH');
  const minutes = dayjs(timer).format('mm');
  const seconds = dayjs(timer).format('ss');

  return (
    <Container>
      <TimerWrap>
        <TimerText>{hours}시</TimerText>
      </TimerWrap>
      <TimerWrap>
        <TimerText>{minutes}분</TimerText>
      </TimerWrap>
      <TimerWrap>
        <TimerText>{seconds}초</TimerText>
      </TimerWrap>
      <CircleProgressBar
        percentage={Math.floor((Number(seconds) / 60) * 100)}
      />
    </Container>
  );
}
