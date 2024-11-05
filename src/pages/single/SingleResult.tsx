import _ from 'lodash';
import { MousePointerClick, Percent, Timer } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getUserTimer } from '@/api/timer';

import useDeviceType from '@/hooks/useDeviceType';
import { useUserCheck } from '@/hooks/useUserCheck';

import { ContentFlexContainer } from '@/styles/MainContainer';

// 결과를 보여주는 컴포넌트를 분리
const ResultStats = ({ result, isMobile }) => (
  <div className={`stats shadow ${isMobile ? 'stats-vertical' : ''} bg-black`}>
    <div className="stat">
      <div className="stat-figure text-primary">
        <MousePointerClick />
      </div>
      <div className="stat-title">선택된 시간</div>
      <div className="stat-value text-primary">{result.selectTimer}초</div>
      <div className="stat-desc">타이머로 선택한 시간</div>
    </div>

    <div className="stat">
      <div className="stat-figure text-secondary">
        <Timer />
      </div>
      <div className="stat-title">총 소모된 시간</div>
      <div className="stat-value text-secondary">{result.endTimer}초</div>
      <div className="stat-desc">타이머로 선택된 시간에서 소모된 시간</div>
    </div>

    <div className="stat">
      <div className="stat-figure text-info">
        <Percent />
      </div>
      <div className="stat-title">소모된 비율</div>
      <div className="stat-value text-info">{result.percentageTimer}%</div>
      <div className="stat-desc">선택된 시간 대비 소모된 비율</div>
    </div>

    <div className="stat">
      <div className="stat-title">선택된 시간으로 소비한 하루비율</div>
      <div className="stat-value">
        {Number(result.percentageBaseDay).toFixed(2)}%{' '}
      </div>
      <div className="stat-desc text-secondary">24시간중 소모된 비율</div>
    </div>
  </div>
);

export default function SingleResult() {
  const isMobile = useDeviceType();
  const { user, isLoading } = useUserCheck();
  const [searchParams] = useSearchParams();
  const docId = searchParams.get('docid');
  const [result, setResult] = useState({
    selectTimer: '',
    endTimer: '',
    percentageBaseDay: '',
    percentageTimer: 0,
  });

  useEffect(() => {
    const calculateResult = data => {
      const resultPercentage = (data.endTimer / data.settingTime) * 100;
      return {
        selectTimer: data.settingTime,
        endTimer: (data.settingTime - data.endTimer).toFixed(2),
        percentageTimer: (100 - resultPercentage).toFixed(2),
        percentageBaseDay: data.percentageBaseDay,
      };
    };

    if (!_.isEmpty(user)) {
      getUserTimer({ docId })
        .then(res => {
          setResult(calculateResult(res));
        })
        .catch(err => {
          console.log('err', err);
        });
    } else {
      const nonMemberResult = JSON.parse(
        localStorage.getItem('nonMember_timer')
      );
      setResult(calculateResult(nonMemberResult));
    }
  }, [user, docId]);

  if (user && isLoading) {
    return (
      <ContentFlexContainer>
        <span className="loading loading-dots w-1/3 m-auto" />
      </ContentFlexContainer>
    );
  }

  return (
    <ContentFlexContainer>
      <ResultStats result={result} isMobile={isMobile} />
    </ContentFlexContainer>
  );
}
