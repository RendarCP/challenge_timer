import React, { useEffect } from 'react';
import tw from 'twin.macro';
import Input from '../components/core/Input';
import Button from '../components/core/Buttons';
import { useForm } from '../hooks/useForm';
import { loginUserEmail, googleAuth } from '../api/main';
import { ReactComponent as Google } from '../assets/google_logo.svg';
import { useNavigate } from 'react-router-dom';
import { Divider } from '../components/core/Divider';
import { useUserInfo } from '../store/userStore';

const Login = () => {
  const navigate = useNavigate();
  const [{ email, passwd }, onChange, reset] = useForm({
    email: '',
    passwd: '',
  });
  const { loginUserInfo } = useUserInfo();

  const handelClick = () => {
    loginUserEmail(email, passwd)
      .then(res => {
        const user = res[0];
        loginUserInfo(user);
        navigate('/');
        console.log('res', user);
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
          <div>구글 로그인</div>
        </Button>
      </div>
      <Divider>or</Divider>
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

const Container = tw.div`
`;

const LoginWrap = tw.div`
  flex
  flex-col
  justify-center 
  gap-2
`;

const LoginBox = tw.div``;
