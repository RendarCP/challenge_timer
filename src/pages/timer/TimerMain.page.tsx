import React from 'react';
import tw from 'twin.macro';

import multiImage from '../../assets/images/multi.png';
import singleImage from '../../assets/images/single.png';
import { Text } from '../../components/core/Text';

function TimerMainPage() {
  return (
    <Container>
      TimerMainPage
      <ImagesContainer>
        <CardContainer>
          <Image src={singleImage} />
          <CardContent>
            <Text>SINGLE TIME</Text>
          </CardContent>
        </CardContainer>
        <CardContainer>
          <Image src={multiImage} />
          <CardContent>
            <Text>CHALLENGE TIME</Text>
          </CardContent>
        </CardContainer>
      </ImagesContainer>
    </Container>
  );
}

export default TimerMainPage;

const Container = tw.div`
  h-full
  flex
  justify-center
  items-center
`;

const ImagesContainer = tw.div`
  flex
  flex-wrap
  justify-center
`;

const Image = tw.img`
  w-full
  block
  bg-cover
  bg-no-repeat
  bg-center
  object-contain
`;

const CardContainer = tw.div`
  border-2
  border-primary
  rounded
  [max-width: 350px]
  bg-white
  overflow-hidden
  items-stretch
`;

const CardContent = tw.div`
  flex
  items-center
  p-4
`;
