import React, { useState } from 'react';
import { createUserEmail } from '../api/main';
import tw from 'twin.macro';
import Button from '../components/core/Buttons';
import Input from '../components/core/Input';

const Container = tw.div`
  flex
  flex-col
  justify-center
  items-center
  h-full
`;

const SignUpWrap = tw.div`
  w-[500px]
  text-center
`;

const StyledInput = tw.input`
  p-2.5
  w-full
  rounded-lg
  border-2
`;

const SigunUpBox = tw.div`
  w-full
`;

const SignUp = () => {
  const [userId, setUserId] = useState('');
  const [passWd, setPassWd] = useState('');

  const onSignUp = () => {
    createUserEmail(userId, passWd)
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  console.log('userId', userId);
  console.log('passWd', passWd);

  return (
    <Container>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <SignUpWrap>
        <h1>회원가입</h1>
        <SigunUpBox>
          <div>이메일</div>
          <StyledInput
            value={userId}
            onChange={(e: any) => setUserId(e.target.value)}
          />
        </SigunUpBox>
        <SigunUpBox>
          <div>비밀번호</div>
          <StyledInput
            value={passWd}
            onChange={(e: any) => setPassWd(e.target.value)}
          />
        </SigunUpBox>
        <SigunUpBox>
          <div>목표</div>
          <StyledInput />
        </SigunUpBox>
        <Button onClick={onSignUp}>회원가입</Button>
        <Input type="standard" />
      </SignUpWrap>
    </Container>
  );
};

export default SignUp;
