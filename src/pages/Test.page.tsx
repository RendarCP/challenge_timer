import React from 'react';
import Button from '../components/core/Buttons';
import Input from '../components/core/Input';
import { Text } from '../components/core/Text';

export default function TestPage() {
  return (
    <div>
      <Button>테스트12</Button>
      <Input />
      <Text color="red">테스트</Text>
    </div>
  );
}
