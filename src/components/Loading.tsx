import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const Loading = () => {
  return (
    <Container>
      <LoaderSpin />
    </Container>
  );
};

export default Loading;

const Container = tw.div`
  flex
  flex-col
  justify-center
  items-center
  absolute
  top-0
  left-0
  [z-index: 10000]
  w-full
  h-screen
  [background-color: rgba(255, 255, 255, 0.3)]
`;

const LoaderSpin = tw.div`
  border-8
  border-solid
  border-white
  rounded-full
  [border-top: 8px solid #02c685]
  w-10
  h-10
  animate-spin
`;
