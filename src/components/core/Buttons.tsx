import React, { HTMLAttributes, JSXElementConstructor, ReactNode } from 'react';
import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';
import { extend } from 'dayjs';

const containerVariants: TwStyle = {
  contained: tw`bg-primary text-white enabled:hover:bg-hover`,
  outlined: tw`border-2 border-primary enabled:hover:bg-hover`,
  text: tw`bg-white text-black`,
};

const styles = ({ variant = 'contained', disabled }: any) => [
  tw`flex justify-center items-center w-full p-3 rounded relative`,
  disabled && tw`opacity-25 cursor-not-allowed`,
  containerVariants[variant],
];

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: string;
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
