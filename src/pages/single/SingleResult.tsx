import { copyToClipboard, encodeData } from '@/modules/function';
import _ from 'lodash';
import { MousePointerClick, Percent, Share, Timer } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getUserTimer } from '@/api/timer';

import ResultStats from '@/components/ResultStats';
import Spacer from '@/components/core/Spacer';
import { Text } from '@/components/core/Text';

import useDeviceType from '@/hooks/useDeviceType';
import { useUserCheck } from '@/hooks/useUserCheck';

import { ContentFlexContainer } from '@/styles/MainContainer';

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

  const encodedData = encodeData(result);

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

  const handleSharedButton = () => {
    const encodedData = encodeData(result);
    const shareLink = `${window.location.origin}/shared?data=${encodedData}`;
    copyToClipboard(shareLink);
    document.getElementById('shared_modal').close();
    toast.success('클립보드에 복사되었습니다.');
  };

  // const copyToClipboard = text => {
  //   navigator.clipboard.writeText(text).then(
  //     () => {
  //       document.getElementById('shared_modal').close();
  //       toast.success('클립보드에 복사되었습니다.');
  //     },
  //     err => {
  //       console.error('클립보드 복사 실패:', err);
  //     }
  //   );
  // };

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
      <Spacer top={20} />
      <div className="flex justify-center">
        <button
          className={`btn btn-primary text-white ${
            isMobile ? 'w-2/3' : 'w-1/3'
          }`}
          onClick={() => document.getElementById('shared_modal').showModal()}
        >
          <Share />
          공유하기
        </button>
      </div>
      <dialog id="shared_modal" className="modal">
        <div className="modal-box text-center">
          <Text typography="h5" className="font-bold text-lg text-center">
            공유하기
          </Text>
          <Spacer top={10} />
          <div>
            <input
              type="text"
              placeholder="Type here"
              readOnly
              value={`${window.location.origin}/shared?data=${encodedData}`}
              className="input input-bordered input-warning w-full max-w-xs"
            />
            <Spacer top={20} />
            <button
              className={`btn btn-primary text-white ${
                isMobile ? 'w-2/3' : 'w-1/3'
              }`}
              onClick={() => handleSharedButton()}
            >
              <Share />
              복사하기
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </ContentFlexContainer>
  );
}
