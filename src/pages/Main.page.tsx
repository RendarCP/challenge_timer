import { Swords, Timer } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import CardContent from '../components/core/card/CardContent';
import tw from 'twin.macro';

import Spacer from '../components/core/Spacer';
import Card from '../components/core/card/Card';
import { ContentContainer } from '../styles/MainContainer';

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <Container>
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
    </Container>
  );
}

const Container = tw.div`
  w-full
  h-full
  // flex
  // justify-center
  // items-start
  // m-auto
  p-5
`;

const FlexWrapper = tw.div`
  flex
  items-center
`;
