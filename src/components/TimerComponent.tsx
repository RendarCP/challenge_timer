import React from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import CircleProgressBar from './CircleProgressBar';

const Container = tw.div`
  flex
  justify-center
  items-center
  w-full
  md:w-2/5
`;

export default function TimerComponent({ time, seconds, text }: any) {
  return (
    <Container>
      <CircleProgressBar
        percentage={Math.floor((Number(seconds) / 60) * 100)}
        text={text}
      />
    </Container>
  );
}
