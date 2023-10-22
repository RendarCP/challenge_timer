import React, { Children, ReactNode } from 'react';
import tw, { TwStyle } from 'twin.macro';

const dividerStyles: TwStyle = {
  root: tw`flex items-center my-5`,
  divider: tw`w-full border-t border-gray-300`,
  text: tw`px-4`,
};

interface DividerProps {
  children?: ReactNode;
}
export const Divider = ({ children, ...props }: DividerProps) => {
  return (
    <div css={dividerStyles.root} {...props}>
      <div css={dividerStyles.divider}></div>
      {children && <div css={dividerStyles.text}>{children}</div>}
      <div css={dividerStyles.divider}></div>
    </div>
  );
};
