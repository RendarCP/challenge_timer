import React, { Children, ReactNode } from 'react';
import tw, { TwStyle } from 'twin.macro';

const Root = tw.div`[border-width: 1px] border-solid border-gray-300 my-2.5`;

interface DividerProps {
  children?: ReactNode;
}
export const Divider = ({ children, ...props }: DividerProps) => {
  return <Root {...props}>{children}</Root>;
};
