import React, { ElementType, ReactNode } from 'react';
import tw from 'twin.macro';

import CardContent from './CardContent';
import CardHeader from './CardHeader';

interface CardProps {
  children: ReactNode;
  full?: boolean;
  onClick?: () => void;
}

const styles = ({ full }) => [
  tw`
  relative
  rounded-md
  overflow-hidden
  bg-[rgb(18, 18, 18)]
  shadow-[rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px]
  hover:border-2 border-primary cursor-pointer
  `,
  full && tw`w-full`,
];

const Card = ({ children, full = false, ...props }: CardProps) => {
  return (
    <div css={styles({ full })} {...props}>
      {children}
    </div>
  );
};

export default Card;

Card.Header = CardHeader;
Card.Content = CardContent;

const Container = tw.div`
  flex
  flex-col
  justify-center
  items-center
  rounded-md
  overflow-hidden
  bg-[rgb(18, 18, 18)]
  shadow-[rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px]
`;
