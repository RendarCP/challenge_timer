import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import tw from 'twin.macro';

import { loginUserEmail } from '../../api/auth';
import Button from '../../components/core/Buttons';
import { Divider } from '../../components/core/Divider';
import Input from '../../components/core/Input';
import { Text } from '../../components/core/Text';
import { useForm } from '../../hooks/useForm';
import { errorCode } from '../../modules/ErrorHandling';
import { useUserStore } from '../../store/useUserStore';
import { ReactComponent as Github } from '../assets/github_logo.svg';
import { ReactComponent as Google } from '../assets/google_logo.svg';
import SocialLoginButtons from './SocialLoginButtons';

const LoginView = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
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
        setUser(res);
      })
      .catch(err => {
        toast.error(errorCode(err.code));
        // console.log('err', err, err.code);
      });
  };

  return (
    <Container>
      <div>
        <h3 className="font-bold text-lg text-center">
          본인의 시간, 대결을 해보세요!
        </h3>
      </div>
      <SocialLoginButtons />
      {/* <Divider>or</Divider> */}
      <div className="divider">OR</div>
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
export default LoginView;

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
