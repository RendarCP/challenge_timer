import React from 'react';
import tw from 'twin.macro';
import Input from '../components/core/Input';
import Button from '../components/core/Buttons';
import { useForm } from '../hooks/useForm';
import { loginUserEmail, googleAuth } from '../api/main';
import { ReactComponent as Google }from '../assets/google_logo.svg'

const Container = tw.div`
`;

const LoginWrap = tw.div`
  flex
  flex-col
  justify-center 
  gap-2
`;

const LoginBox = tw.div``;

const Login = () => {
  const [{ email, passwd }, onChange, reset] = useForm({
    email: '',
    passwd: '',
  });

  const handelClick = () => {
    loginUserEmail(email, passwd)
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const handleGoogle = () => {
    googleAuth()
  }
  return (
    <Container>
      <div>
        {/* <img src={Google} /> */}
        <Button variant="text" onClick={handleGoogle}>
          <Google />
          <div>테스트입니당.</div>
        </Button>
      </div>
      <div>divider</div>
      <LoginWrap>
        <h1>로그인</h1>
        <LoginBox>
          <div>아이디</div>
          <Input type="email" name="email" value={email} onChange={onChange} />
        </LoginBox>
        <LoginBox>
          <div>패스워드</div>
          <Input
            type="password"
            name="passwd"
            value={passwd}
            onChange={onChange}
          />
        </LoginBox>
        <Button onClick={handelClick}>로그인</Button>
      </LoginWrap>
    </Container>
  );
};
export default Login;
