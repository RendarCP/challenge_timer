import React from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { githubAuth, googleAuth } from '../../api/auth';
import { ReactComponent as Github } from '../../assets/github_logo.svg';
import { ReactComponent as Google } from '../../assets/google_logo.svg';
import Button from '../core/Buttons';
import Spacer from '../core/Spacer';
import { Text } from '../core/Text';

export default function SocialLoginButtons() {
  const navigate = useNavigate();
  // 구글 로그인
  const handleGoogle = () => {
    googleAuth()
      .then(res => {
        console.log('res', res);
        console.log(
          'res dat',
          res.create_date.seconds,
          new Date(res.create_date.seconds * 1000)
        );
        document.getElementById('login_modal').close();
      })
      .catch(err => {
        console.log('err', err, err.code);
      });
  };

  // 깃허브 로그인
  const handleGithub = () => {
    githubAuth()
      .then(res => {
        console.log('res', res);
        document.getElementById('login_modal').close();
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  return (
    <Container>
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
        <Text>구글 로그인</Text>
      </Button>
      <Spacer top={10} />
      <Button
        style={{ border: '1px solid gray' }}
        variant="text"
        onClick={handleGithub}
      >
        <Github
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translate(50%, -40%)',
          }}
          width={20}
          height={20}
        />
        <Text>깃허브 로그인</Text>
      </Button>
    </Container>
  );
}

const Container = tw.div``;
