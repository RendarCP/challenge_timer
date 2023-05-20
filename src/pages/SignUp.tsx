import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledInput = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 8px;
`;

const SignUpWrap = styled.div`
  max-width: 500px;
  width: 100%;
`;

const SignUp = () => {
  return (
    <Container>
      <h1>회원가입</h1>
      <SignUpWrap>
        <div>이메일</div>
        <StyledInput />
      </SignUpWrap>
      <SignUpWrap>
        <div>비밀번호</div>
        <StyledInput />
      </SignUpWrap>
      <SignUpWrap>
        <div>목표</div>
        <StyledInput />
      </SignUpWrap>
    </Container>
  );
};

export default SignUp;
