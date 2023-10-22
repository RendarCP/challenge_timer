import { HTMLAttributes } from 'react';
import tw, { TwStyle } from 'twin.macro';

interface TextProps extends React.ComponentProps<'span'> {
  typography?: string;
  color?: string;
}

export const Text = ({ typography = 'p', color, ...props }: TextProps) => {
  return <span style={{ color }} css={styles({ typography })} {...props} />;
};

const styles = ({ typography }: any) => [
  tw`whitespace-pre-line break-all`,
  TYPOGRAPH_VARIANT[typography],
];

const TYPOGRAPH_VARIANT: TwStyle = {
  h1: tw`text-6xl font-black`,
  h2: tw`text-5xl font-bold`,
  h3: tw`text-4xl font-bold`,
  h4: tw`text-3xl font-bold`,
  h5: tw`text-2xl font-bold`,
  p: tw`text-base font-normal`,
};
