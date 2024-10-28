import { Construction } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { Text } from '@/components/core/Text';

import Button from '../core/Buttons';
import Spacer from '../core/Spacer';

const Preparing = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <Construction size={350} />
      </div>
      <Text typography="h3">현재 준비중이예요~!</Text>
      <Text typography="h3">조금만 기달려 주세요.</Text>
      <Spacer top={20} />
      <Button style={{ width: '50%' }} onClick={() => navigate(-1)}>
        뒤로가기
      </Button>
    </Container>
  );
};

export default Preparing;

const Container = tw.div`
  w-full
  h-full
  flex
  flex-col
  justify-center
  items-center
`;
