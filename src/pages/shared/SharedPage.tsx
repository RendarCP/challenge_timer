import { decodeData } from '@/modules/function';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import Logo from '@/assets/images/logo.png';

import ResultStats from '@/components/ResultStats';
import Spacer from '@/components/core/Spacer';
import { Text } from '@/components/core/Text';

import useDeviceType from '@/hooks/useDeviceType';

import {
  ContentFlexContainer,
  ContentPureContainer,
} from '@/styles/MainContainer';

export default function SharedPage() {
  const navigate = useNavigate();
  const isMobile = useDeviceType();
  const location = useLocation();
  const [data, setData] = useState(null);
  useEffect(() => {
    // URL에서 데이터 가져오기
    const params = new URLSearchParams(location.search);
    const encodedData = params.get('data');

    if (encodedData) {
      try {
        // 데이터 디코딩
        const decodedData = decodeData(encodedData);
        setData(decodedData);
        console.log(decodedData);
      } catch (error) {
        console.error('데이터 디코딩 오류:', error);
      }
    }
  }, [location]);

  const Container = isMobile ? SharedContainer : ContentFlexContainer;

  return (
    <Container>
      <LogoImage src={Logo} />
      <Spacer top={10} />
      <Text typography={isMobile ? 'h2' : 'h1'}>TimeFight</Text>
      <Spacer top={10} />
      <button
        onClick={() => navigate('/main')}
        className={`btn btn-primary text-white w-1/3`}
      >
        시작하기
      </button>
      <Spacer top={20} />
      <ResultStats result={data} isMobile={isMobile} />
      <Spacer bottom={20} />
    </Container>
  );
}

const LogoImage = tw.img`
  w-20
`;

const SharedContainer = tw.div`
  h-fit
  p-7
  mb-7
`;
