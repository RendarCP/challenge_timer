import { MousePointerClick, Percent, Timer } from 'lucide-react';
import React from 'react';

export default function ResultStats({ result, isMobile }) {
  return (
    <div
      className={`stats shadow ${isMobile ? 'stats-vertical' : ''} bg-black`}
    >
      <div className="stat">
        <div className="stat-figure text-primary">
          <MousePointerClick />
        </div>
        <div className="stat-title">선택된 시간</div>
        <div className="stat-value text-primary">{result?.selectTimer}초</div>
        <div className="stat-desc">타이머로 선택한 시간</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <Timer />
        </div>
        <div className="stat-title">총 소모된 시간</div>
        <div className="stat-value text-secondary">{result?.endTimer}초</div>
        <div className="stat-desc">타이머로 선택된 시간에서 소모된 시간</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-info">
          <Percent />
        </div>
        <div className="stat-title">소모된 비율</div>
        <div className="stat-value text-info">{result?.percentageTimer}%</div>
        <div className="stat-desc">선택된 시간 대비 소모된 비율</div>
      </div>

      <div className="stat">
        <div className="stat-title">선택된 시간으로 소비한 하루비율</div>
        <div className="stat-value">
          {Number(result?.percentageBaseDay).toFixed(2)}%{' '}
        </div>
        <div className="stat-desc text-secondary">24시간중 소모된 비율</div>
      </div>
    </div>
  );
}
