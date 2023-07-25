import React, { useState } from 'react';
import { createUserEmail } from '../api/main';
import tw from 'twin.macro';
import Button from '../components/core/Buttons';
import Input from '../components/core/Input';
import { useForm } from '../hooks/useForm';

const Container = tw.div`
  flex
  flex-col
  justify-center
  items-center
  h-full
  gap-2
`;

const SignUpWrap = tw.div`
  w-[500px]
  text-center
`;

const StyledInput = tw.input`
  p-2.5
  w-full
  rounded
  border-2
`;

const SigunUpBox = tw.div`
  w-full
  mb-4
`;

const SignUp = () => {
  const [{ email, passwd }, onChange, reset] = useForm({
    email: '',
    passwd: '',
  });

  const onSignUp = () => {
    createUserEmail(email, passwd)
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  console.log('userId', email);
  console.log('passWd', passwd);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    <Container>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <SignUpWrap>
        <h1>회원가입</h1>
        <SigunUpBox>
          <div>이메일</div>
          <Input
            validator={true}
            validText="test"
            name="email"
            value={email}
            onChange={onChange}
          />
        </SigunUpBox>
        <SigunUpBox>
          <div>비밀번호</div>
          <Input name="passwd" value={passwd} onChange={onChange} />
        </SigunUpBox>
        <SigunUpBox>
          <div>목표</div>
          <Input />
        </SigunUpBox>
        <Button onClick={onSignUp}>회원가입</Button>
      </SignUpWrap>
    </Container>
  );
};

export default SignUp;
