import React, { ReactNode } from 'react';
import tw from 'twin.macro';

interface CardContentProps {
  children: ReactNode;
  full?: boolean;
}

const styles = ({ full }) => [tw`p-3`, full && tw`w-full`];

const CardContent = ({ children, full = false }: CardContentProps) => {
  return <div css={styles({ full })}>{children}</div>;
};

export default CardContent;

const Container = tw.div`
  p-3
`;
