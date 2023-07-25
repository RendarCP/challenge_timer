import { HTMLAttributes } from 'react';
import tw, { TwStyle } from 'twin.macro';

export const Text = ({ typography = 'p', color, ...props }) => {
  return (
    <span style={{ color }} css={TYPOGRAPH_VARIANT[typography]} {...props} />
  );
};

const TYPOGRAPH_VARIANT: TwStyle = {
  h1: tw`text-6xl font-black`,
  h2: tw`text-5xl font-bold`,
  h3: tw`text-4xl font-bold`,
  h4: tw`text-3xl font-bold`,
  h5: tw`text-2xl font-bold`,
  p: tw`text-base font-normal`,
};
