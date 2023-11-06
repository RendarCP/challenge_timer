import styled from '@emotion/styled';
import React from 'react';
import tw from 'twin.macro';

import CircleProgressBar from './CircleProgressBar';

const Container = tw.div`
  flex
  justify-center
  w-full
  h-full
  select-none
`;

const Wrapper = tw.div`
  flex
  justify-center
  items-center
  // w-full
  // md:w-2/5
  // sm:w-3/5
`;

export default function TimerComponent({ time, seconds, text }: any) {
  return (
    <Container>
      <Wrapper>
        <CircleProgressBar
          percentage={Math.floor((Number(seconds) / 60) * 100)}
          text={text}
        />
      </Wrapper>
    </Container>
  );
}
