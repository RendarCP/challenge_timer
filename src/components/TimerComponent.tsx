import React from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import CircleProgressBar from './CircleProgressBar';
import useClock from '../hooks/useClock';
import useStopWatch from '../hooks/useStopWatch';

const Container = tw.div`
  flex
`;

export default function TimerComponent({ time, seconds, text }: any) {
  return (
    <Container>
      <CircleProgressBar
        size={400}
        percentage={Math.floor((Number(seconds) / 60) * 100)}
        text={text}
      />
    </Container>
  );
}
