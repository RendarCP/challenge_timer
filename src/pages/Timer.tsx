import React, { useEffect, useState } from 'react';
import tw, { css } from 'twin.macro';
import styled from '@emotion/styled';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import { toast } from 'react-toastify';
import TimerComponent from '../components/TimerComponent';
import CircleProgressBar from '../components/CircleProgressBar';

dayjs.locale('ko');
// dayjs.extend(localizedFormat);

const Container = tw.div`
  flex
  flex-col
  justify-center
  items-center
  h-full
`;

const FlexWrap = tw.div`
  flex
  flex-col
`;

const HeaderTitle = tw.h1`
  text-xl
  font-bold
`;

const Button = tw.button`
  border-2
  rounded-lg
  px-6
  py-2
`;

const Input = tw.input`
  border-2
  rounded-lg
  p-2
  border-green-500
`;

const Label = tw.label`
  text-sm
  text-gray-500
`;

const TestLabel = styled.div<{ size: string | number }>`
  font-size: ${props => props.size && props.size}px;
  ${tw`text-blue-300`}
`;

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
`;

const LoaderSpin = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #02c685;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Timer() {
  const [user, setUser] = useState('');
  const [show, setShow] = useState(false);
  const [start, setStart] = useState<Dayjs | null | Date>(null);
  const [end, setEnd] = useState<Dayjs | null | Date>(null);

  useEffect(() => {
    const storage = localStorage.getItem('challenge_timer');
    if (storage !== null) {
      const userDate = JSON.parse(storage);
      console.log('storage', userDate);
      if (userDate.name) {
        setUser(userDate.name);
        setShow(true);
      }
    }
  }, []);

  const handleStart = () => {
    if (user === '') {
      toast.error('이름은 필수 값입니다');
    } else {
      setShow(true);
      setStart(new Date());
      localStorage.setItem('challenge_timer', JSON.stringify({ name: user }));
    }
  };

  const handleEnd = () => {
    setEnd(new Date());
    localStorage.setItem(
      'challenge_timer',
      JSON.stringify({ name: user, lastDate: new Date() })
    );
  };

  const handleChange = (e: any) => {
    setUser(e.target.value);
  };

  console.log('user', user);

  return (
    <Container>
      <HeaderTitle>타이머 어택</HeaderTitle>
      {!show ? (
        <>
          <FlexWrap>
            <Label>이름</Label>
            <Input value={user} onChange={handleChange} />
          </FlexWrap>
          <div style={{ marginTop: 20 }} />
          <Button onClick={handleStart}>저장후 시작</Button>
        </>
      ) : (
        <>
          <TestLabel size={20}>{user}님</TestLabel>
          <TimerComponent />
          <div>시작 시간 : {dayjs(start).format('HH:mm:ss')}</div>
          <Button onClick={handleEnd}>종료</Button>
          {/* <Loader>
            <LoaderSpin />
          </Loader> */}

          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </>
      )}
    </Container>
  );
}
