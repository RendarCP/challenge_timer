import React from 'react';

// import CardContent from '../components/core/card/CardContent';
import tw from 'twin.macro';

import Card from '../components/core/card/Card';
import Spacer from '../components/core/Spacer';

export default function MainPage() {
  return (
    <Container>
      <Card full>
        <Card.Header>개인 타이머</Card.Header>
        <Card.Content full>타이머</Card.Content>
      </Card>
      <Spacer left={20} />
      {/* <Card full>
        <Card.Header>공유 타이머</Card.Header>
        <Card.Content>타이머</Card.Content>
      </Card> */}
      <Spacer left={20} />
      <Card full>
        <Card.Header>스탑워치</Card.Header>
        <Card.Content>스탑워치</Card.Content>
      </Card>
    </Container>
  );
}

const Container = tw.div`
  w-full
  h-full
  flex
  m-auto
  p-5
`;
