import _ from 'lodash';
import { ChartArea, Hourglass, Swords, Timer } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import CountdownModal from '@/components/CountDownModal';
import Spacer from '@/components/core/Spacer';
import { Text } from '@/components/core/Text';
import Card from '@/components/core/card/Card';

import { useUserCheck } from '@/hooks/useUserCheck';

import { ContentFlexContainer } from '@/styles/MainContainer';

export default function Single() {
  const navigate = useNavigate();

  const { user } = useUserCheck();

  const handleCardClick = ({
    type,
    navigate,
  }: {
    type: string;
    navigate: () => void;
  }) => {
    // if (!_.isEmpty(user)) {
    navigate();
    // }
  };

  return (
    <Container>
      <div className="flex flex-col">
        <Text typography="h1">개인</Text>
        <Text typography="h4">나만의 개인 맞춤 타이머</Text>
        <Text typography="h6">
          {`개인의 시간을 기록해 보세요.
          측정하고 싶은 타입을 선택해주세요.`}
        </Text>
      </div>
      <ContentWrapper>
        <Card
          full
          onClick={() =>
            handleCardClick({
              type: 'timer',
              navigate: navigate('/main/timer/single/timer'),
            })
          }
        >
          <Card.Header>
            <FlexWrapper>
              <Timer size={64} />
            </FlexWrapper>
          </Card.Header>
          <Card.Content full>
            <FlexWrapper>
              <Text typography="h4">타이머</Text>
            </FlexWrapper>
          </Card.Content>
        </Card>
        <Spacer left={20} />
        <Card full onClick={() => navigate('/main/timer/single/stopwatch')}>
          <Card.Header>
            <FlexWrapper>
              <Hourglass size={64} />
            </FlexWrapper>
          </Card.Header>
          <Card.Content full>
            <FlexWrapper>
              <Text typography="h4">스탑워치</Text>
            </FlexWrapper>
          </Card.Content>
        </Card>
      </ContentWrapper>
      <Card full onClick={() => navigate('/main/timer/single/analytics')}>
        <Card.Header>
          <FlexWrapper>
            <ChartArea size={64} />
          </FlexWrapper>
        </Card.Header>
        <Card.Content full>
          <FlexWrapper>
            <Text typography="h4">기록</Text>
          </FlexWrapper>
        </Card.Content>
      </Card>
    </Container>
  );
}
const Container = tw.div`
  w-full
  h-full
  flex
  flex-col
  pt-6
`;

const ContentWrapper = tw.div`
  flex
  h-1/3
  justify-center
  items-center
`;

const FlexWrapper = tw.div`
  w-full
  h-full
  flex
  items-center
  justify-center
`;
