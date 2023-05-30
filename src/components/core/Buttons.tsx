import React from 'react';
import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';

const containerVariants: TwStyle = {
  // Named class sets
  light: tw`bg-white text-black`,
  dark: tw`bg-black text-white`,
  crazy: tw`bg-yellow-500 text-red-500`,
};

const styles = {
  container: ({ variant = 'dark' }: any) => [
    tw`flex w-full`,
    containerVariants[variant], // Grab the variant style via a prop
  ],
  column: tw`w-1/2`,
};

const Button = () => {
  return <div css={styles.container('light')}>테스트</div>;
};

export default Button;
