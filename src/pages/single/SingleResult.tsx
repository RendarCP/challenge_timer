import _ from 'lodash';
import { MousePointerClick, Percent, Timer } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import useDeviceType from '@/hooks/useDeviceType';
import { useUserCheck } from '@/hooks/useUserCheck';

import {
  ContentFlexContainer,
  ContentPureContainer,
} from '@/styles/MainContainer';

export default function SingleResult() {
  const isMobile = useDeviceType();
  const { user } = useUserCheck();
  const [searchParams, setSearchParams] = useSearchParams();
  const [result, setResult] = useState({
    selectTimer: '',
    endTimer: '',
    percentageBaseDay: '',
    percentageTimer: 0,
  });
  console.log('searchParams', searchParams.get('tid'));

  useEffect(() => {
    if (!_.isEmpty(user)) {
      console.log('유저 정보가 있음');
    } else {
      const nonMemberResult = JSON.parse(
        localStorage.getItem('nonMember_timer')
      );
      const resultPercentage =
        (nonMemberResult.endTimer / nonMemberResult.settingTime) * 100;
      console.log('percentage', resultPercentage);
      setResult({
        ...result,
        selectTimer: nonMemberResult.settingTime,
        endTimer: (
          nonMemberResult.settingTime - nonMemberResult.endTimer
        ).toFixed(2),
        percentageTimer: (100 - resultPercentage).toFixed(2),
        percentageBaseDay: nonMemberResult.percentageBaseDay,
      });
      console.log('==============', nonMemberResult);
    }
  }, []);

  return (
    <ContentFlexContainer>
      <div
        className={`stats shadow ${isMobile ? 'stats-vertical' : ''} bg-black`}
      >
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
          {/* <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div> */}
          <div className="stat-title">선택된 시간으로 소비한 하루비율</div>
          <div className="stat-value">
            {Number(result.percentageBaseDay).toFixed(2)}%{' '}
          </div>
          <div className="stat-desc text-secondary">24시간중 소모된 비율</div>
        </div>
      </div>
    </ContentFlexContainer>
  );
}
