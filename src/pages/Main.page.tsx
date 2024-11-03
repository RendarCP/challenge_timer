import { Swords, Timer } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import useDeviceType from '@/hooks/useDeviceType';

import { ContentPureContainer } from '@/styles/MainContainer';

import Spacer from '../components/core/Spacer';
import Card from '../components/core/card/Card';

export default function MainPage() {
  const navigate = useNavigate();
  const isMobile = useDeviceType();
  console.log('isMobile', isMobile);
  return (
    <ContentPureContainer
    // style={{
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   flexDirection: 'column',
    // }}
    >
      <Card full onClick={() => navigate('/main/timer/single')}>
        <Card.Header>
          <FlexWrapper>
            <Timer />
            개인
          </FlexWrapper>
        </Card.Header>
        <Card.Content>개인의 시간을 기록해보세요</Card.Content>
      </Card>
      {/* <Spacer top={20} />
      <Card full>
        <Card.Header>공유 타이머</Card.Header>
        <Card.Content>타이머</Card.Content>
      </Card> */}
      <Spacer top={20} />
      <Card full onClick={() => navigate('/main/challenge/room')}>
        <Card.Header>
          <FlexWrapper>
            <Swords />
            챌린지
          </FlexWrapper>
        </Card.Header>
        <Card.Content>상대방과 함께 시간을 겨뤄보세요</Card.Content>
      </Card>
    </ContentPureContainer>
  );
}

const FlexWrapper = tw.div`
  flex
  items-center
`;
