import React, { ReactNode } from 'react';
import tw from 'twin.macro';

interface CardHeaderProps {
  children: ReactNode;
}

const CardHeader = ({ children }: CardHeaderProps) => {
  return <Container>{children}</Container>;
};

export default CardHeader;

const Container = tw.div`
  flex
  items-center
  p-4
`;
