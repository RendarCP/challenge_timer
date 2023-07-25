import React from 'react';
import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';

const containerVariants: TwStyle = {
  contained: tw`bg-orange-300 text-white hover:bg-orange-400`,
  outlined: tw`border-2 border-orange-300 hover:bg-orange-400`,
  text: tw`bg-yellow-500 text-red-500`,
};

const styles = ({ variant = 'contained' }: any) => [
  tw`flex justify-center items-center w-full p-3 rounded `,
  containerVariants[variant],
];

const Button = ({ variant = 'contained', children, ...props }) => {
  return (
    <button css={styles({ variant })} {...props}>
      {children}
    </button>
  );
};

export default Button;
