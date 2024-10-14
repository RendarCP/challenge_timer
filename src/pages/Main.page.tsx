import React from 'react';
// import CardContent from '../components/core/card/CardContent';
import tw from 'twin.macro';

import Spacer from '../components/core/Spacer';
import Card from '../components/core/card/Card';

export default function MainPage() {
  return (
    <Container>
      <Card full>
        <Card.Header>개인</Card.Header>
        <Card.Content>개인의 시간을 기록해보세요</Card.Content>
      </Card>
      {/* <Spacer top={20} />
      <Card full>
        <Card.Header>공유 타이머</Card.Header>
        <Card.Content>타이머</Card.Content>
      </Card> */}
      <Spacer top={20} />
      <Card full>
        <Card.Header>챌린지</Card.Header>
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

const Item = ({ num }: any) => {
  return <div className="item">…</div>;
};

const renderItem = <div>테스트</div>;
