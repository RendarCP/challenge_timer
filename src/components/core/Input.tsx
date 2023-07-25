import React from 'react';
import tw, { TwStyle } from 'twin.macro';

const inputClass = (type: string) => {
  if (type === 'standard') return tw`p-2.5 border-2 rounded-lg`;
  else if (type === 'outlined') return tw`p-2.5 border-2 rounded-lg`;
  else if (type === 'filled')
    return tw`p-2.5 border-b-2 rounded-lg [background-color: red]`;
};

const containerVariants: TwStyle = {
  standard: tw`p-2.5 border-2 rounded-lg`,
  outlined: tw`p-2.5 border-2 rounded-lg`,
  filled: tw`p-2.5 border-b-2 rounded-lg bg-red-500`,
};

const styles = ({ type }: any) => [containerVariants[type]];

const Input = ({ type = 'standard' }: any) => {
  return <input css={styles({ type })} />;
};

export default Input;
