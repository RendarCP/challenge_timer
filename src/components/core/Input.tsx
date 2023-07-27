import React from 'react';
import tw, { TwStyle } from 'twin.macro';

const containerVariants: TwStyle = {
  standard: tw`p-2.5 border-2 rounded-lg`,
  outlined: tw`p-2.5 border-2 rounded-lg`,
  filled: tw`p-2.5 border-b-2 rounded-lg bg-red-500`,
};

const styles = ({ valid }: any) => [
  tw`w-full rounded border-2 p-2.5 [user-select: none] !outline-none`,
  valid && tw`border-red-500`,
  // containerVariants[type],
];

const Input = ({ type = 'standard', validator, validText, ...props }: any) => {
  const valid = Boolean(props.value) && validator;
  return (
    <>
      <input css={styles({ valid })} {...props} />
      {valid && (
        <div css={tw`flex`}>
          <div css={tw`text-red-500`}>{validText}</div>
        </div>
      )}
    </>
  );
};

export default Input;
