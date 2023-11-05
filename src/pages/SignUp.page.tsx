import React, { Children, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { useForm } from '../hooks/useForm';

import {
  createUserDoc,
  createUserEmail,
  emailVerification,
  googleAuth,
} from '../api/main';
import { ReactComponent as Google } from '../assets/google_logo.svg';
import Button from '../components/core/Buttons';
import { Divider } from '../components/core/Divider';
import Input from '../components/core/Input';
import { Text } from '../components/core/Text';
import { emailRegex } from '../utils/regex';

const SignUp = () => {
  const navigate = useNavigate();
  const [{ email, passwd, passwdCheck, nickName, goal }, onChange, reset] =
    useForm({
      email: '',
      passwd: '',
      passwdCheck: '',
      // userName: '',
      nickName: '',
      goal: '',
    });

  const onSignUp = () => {
    createUserEmail(email, passwd)
      .then(res => {
        console.log('create res', res);
        const { user }: any = res;
        emailVerification();
        createUserDoc({
          user_uid: user.uid,
          email: user.email,
          nickName,
          // userName,
          goal,
        })
          .then(res => {
            navigate('/');
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

  const handleGoogle = () => {
    googleAuth()
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const validPasswd =
    passwd === passwdCheck && passwd !== '' && passwdCheck !== '';

  return (
    <Container>
      <div>
        {/* <img src={Google} /> */}
        <Button
          style={{ border: '1px solid gray' }}
          variant="text"
          onClick={handleGoogle}
        >
          <Google
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translate(50%, -40%)',
            }}
            width={20}
            height={20}
          />
          <Text>구글 회원가입</Text>
        </Button>
      </div>
      <Divider>or</Divider>
      <SignUpWrap>
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
            validator={passwd !== passwdCheck}
            validText="비밀번호가 달라요.😭"
            name="passwdCheck"
            value={passwdCheck}
            onChange={onChange}
          />
        </SigunUpBox>
        {/* <SigunUpBox>
          <div>이름</div>
          <Input name="userName" value={userName} onChange={onChange} />
        </SigunUpBox> */}
        <SigunUpBox>
          <div>닉네임</div>
          <Input name="nickName" value={nickName} onChange={onChange} />
        </SigunUpBox>
        <SigunUpBox>
          <div>목표</div>
          <Input name="goal" value={goal} onChange={onChange} />
        </SigunUpBox>
        <Button
          disabled={!emailRegex.test(email) || !validPasswd}
          onClick={onSignUp}
        >
          회원가입
        </Button>
      </SignUpWrap>
    </Container>
  );
};

export default SignUp;

const Container = tw.div``;

const SignUpWrap = tw.div`
  flex
  flex-col
  justify-center
  items-center
  gap-2
`;

const SigunUpBox = tw.div`
  w-full
`;
