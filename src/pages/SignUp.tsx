import React, { useState } from 'react';
import { createUserDoc, createUserEmail } from '../api/main';
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
  flex
  flex-col
  gap-1
  text-center
`;

const SigunUpBox = tw.div`
  w-full
  mb-4
`;

const SignUp = () => {
  const [
    { email, passwd, paddwdCheck, userName, nickName, goal },
    onChange,
    reset,
  ] = useForm({
    email: '',
    passwd: '',
    paddwdCheck: '',
    userName: '',
    nickName: '',
    goal: '',
  });

  const onSignUp = () => {
    createUserEmail(email, passwd)
      .then(res => {
        console.log('create res', res);
        const { user }: any = res;
        createUserDoc({
          email: user.email,
          nickName,
          userName,
          goal,
        })
          .then(res => {
            console.log('user Create', res);
          })
          .catch(err => {
            console.log('user create error', err);
          });
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  console.log('userId', email);
  console.log('passWd', passwd);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validPasswd = passwd !== paddwdCheck;

  return (
    <Container>
      <SignUpWrap>
        <h1>회원가입</h1>
        <SigunUpBox>
          <div>이메일</div>
          <Input
            validator={!emailRegex.test(email)}
            validText="지원하지 않는 이메일 형식이예요!"
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
          <div>비밀번호 확인</div>
          <Input
            validator={validPasswd}
            validText="비밀번호가 달라요.😭"
            name="paddwdCheck"
            value={paddwdCheck}
            onChange={onChange}
          />
        </SigunUpBox>
        <SigunUpBox>
          <div>이름</div>
          <Input name="userName" value={userName} onChange={onChange} />
        </SigunUpBox>
        <SigunUpBox>
          <div>닉네임</div>
          <Input name="nickName" value={nickName} onChange={onChange} />
        </SigunUpBox>
        <SigunUpBox>
          <div>목표</div>
          <Input name="goal" value={goal} onChange={onChange} />
        </SigunUpBox>
        <Button
          disabled={!emailRegex.test(email) && passwd === '' && !validPasswd}
          onClick={onSignUp}
        >
          회원가입
        </Button>
      </SignUpWrap>
    </Container>
  );
};

export default SignUp;
