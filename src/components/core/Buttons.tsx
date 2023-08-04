import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';

const containerVariants: TwStyle = {
  contained: tw`bg-orange-400 text-white enabled:hover:bg-orange-500`,
  outlined: tw`border-2 border-orange-400 enabled:hover:bg-orange-500`,
  text: tw`bg-white text-black`,
};

const styles = ({ variant = 'contained', disabled }: any) => [
  tw`flex justify-center items-center w-full p-3 rounded relative`,
  disabled && tw`opacity-25 cursor-not-allowed`,
  containerVariants[variant],
];

interface ButtonProps {
  variant: string;
  children?: ReactNode;
  disabled?: boolean;
}

const Button = ({
  variant = 'contained',
  children,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button disabled={disabled} css={styles({ variant, disabled })} {...props}>
      {children}
    </button>
  );
};

export default Button;
