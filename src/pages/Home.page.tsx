import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import Logo from '@/assets/images/logo.png';

import Section from '@/components/Section';
import SmoothCircleTimer from '@/components/SmoothCircleTimer';
import TimerComponent from '@/components/TimerComponent';
import Button from '@/components/core/Buttons';
import Spacer from '@/components/core/Spacer';
import { Text } from '@/components/core/Text';
import CircleProgressBar from '@/components/test/CircleProgressBar';

import useDeviceType from '@/hooks/useDeviceType';
import useTimer from '@/hooks/useTimer';

import ImageChart from '../../public/images/landing_chart.webp';
import ImageFight from '../../public/images/landing_fight.webp';
import ImageTimer from '../../public/images/landing_timer.webp';

const lendingTimerTime = 3000;

export default function HomePage() {
  const navigate = useNavigate();
  const isMobile = useDeviceType();

  return (
    <Container>
      <LogoImage src={Logo} />
      <Spacer top={20} />
      <Wrapper>
        <Text typography={isMobile ? 'h2' : 'h1'}>TimeFight</Text>
        <Text typography="h3">나만의 개인 맞춤 타이머</Text>
        <Text typography={isMobile ? 'h6' : 'h5'}>
          {`이 간단하고 효율적인 타이머로 집중력을 유지하고 생산성을 높이세요.
          전용시간이 필요한 모든 작업에 사용하세요.`}
        </Text>
        <Spacer top={20} />
        <Button onClick={() => navigate('/main')}>시작하기</Button>
      </Wrapper>

      <Section
        index={0}
        title="타이머로 효율적인 시간을 체크해보세요."
        description="효율적인 타이머는 정확한 시간 측정과 리소스 절약을 통해 사용자 경험을 최적화하는 도구입니다."
        imageSrc={ImageTimer}
      />
      <Section
        index={1}
        title="시간으로 승부를 보세요!"
        description="누가 승리할지 모르는 게임같은 느낌의 '챌린지' 기능으로 승패를 겨뤄보세요"
        imageSrc={ImageFight}
      />
      <Section
        index={2}
        title="본인의 효율적인 시간 분석을 해보세요"
        description="차트와 같은 시스템을 제공하여, 더욱더 편리하게 시간을 분석할수 있게 도움을 줍니다."
        imageSrc={ImageChart}
      />
    </Container>
  );
}

const Container = tw.div`
  h-full
  p-8
`;

const Wrapper = tw.div`
  flex
  flex-col
`;

const ButtonWrap = tw.div`
  min-w-[300px]
`;

const BtnWrap = tw.div`flex w-1/2 gap-3`;

const LogoImage = tw.img`
  h-64
`;
