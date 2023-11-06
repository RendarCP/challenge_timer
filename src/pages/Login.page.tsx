import SocialLoginButtons from '../components/SocialLoginButtons';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import tw from 'twin.macro';

import { useForm } from '../hooks/useForm';

import { loginUserEmail, googleAuth, githubAuth } from '../api/main';

import { ReactComponent as Github } from '../assets/github_logo.svg';
import { ReactComponent as Google } from '../assets/google_logo.svg';
import Button from '../components/core/Buttons';
import { Divider } from '../components/core/Divider';
import Input from '../components/core/Input';
import { Text } from '../components/core/Text';
import { errorCode } from '../modules/ErrorHandling';
import { useUserStore } from '../store/useUserStore';

const Login = () => {
  const navigate = useNavigate();
  const { getUser } = useUserStore();
  const [{ email, passwd }, onChange, reset] = useForm({
    email: '',
    passwd: '',
  });

  // 이메일 로그인
  const handelClick = () => {
    loginUserEmail(email, passwd)
      .then(res => {
        navigate('/');
        console.log('res', res);
        getUser(res);
      })
      .catch(err => {
        toast.error(errorCode(err.code));
        // console.log('err', err, err.code);
      });
  };

  return (
    <Container>
      <SocialLoginButtons />
      <Divider>or</Divider>
      <LoginWrap>
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
        <LoginSignUpBox>
          <Text
            onClick={() => navigate('/auth/signup')}
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
            아직 회원이 아니신가요?
          </Text>
        </LoginSignUpBox>
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

const LoginSignUpBox = tw.div`
  flex
  justify-end
`;
