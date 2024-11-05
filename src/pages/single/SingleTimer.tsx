import { hoursData, minutesData } from '@/constant/timeConst';
import {
  addSecondsToNow,
  calculatePercentage,
  calculateSecondsPercentage,
  convertToSeconds,
} from '@/modules/function';
import dayjs from 'dayjs';
import _ from 'lodash';
import { CirclePlay, Pause, Play, TimerOff } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Picker from 'react-mobile-picker';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import tw from 'twin.macro';

import { createSingleTimer, updateTimer } from '@/api/timer';

import CountdownModal from '@/components/CountDownModal';
import SmoothCircleTimer from '@/components/SmoothCircleTimer';
import Button from '@/components/core/Buttons';
import CustomSelect from '@/components/core/Select';
import Spacer from '@/components/core/Spacer';
import { Text } from '@/components/core/Text';

import useDeviceType from '@/hooks/useDeviceType';
import useSlideTransition from '@/hooks/useSlideTransition';
import useTimer from '@/hooks/useTimer';
import { useUserCheck } from '@/hooks/useUserCheck';

import {
  ContentFlexContainer,
  ContentPureContainer,
} from '@/styles/MainContainer';

const selections = {
  hour: [...hoursData.map(h => h.value)],
  minute: [...minutesData.map(m => m.value)],
};

export default function SingleTimer() {
  const navigate = useNavigate();
  const { user, isUser } = useUserCheck();
  const isMobile = useDeviceType();
  const { isVisible, toggleVisibility } = useSlideTransition();
  const [docId, setDocId] = useState('');
  const [showModal, setShowModal] = useState(false);

  // pc 전용 상태
  const [pickHour, setPickHour] = useState({ ...hoursData[0] });
  const [pickMinute, setPickMinute] = useState({ ...minutesData[0] });

  // 모바일전용
  const [pickerValue, setPickerValue] = useState({
    hour: 0,
    minute: 0,
  });
  const {
    hours,
    minutes,
    seconds,
    timer,
    setTimer,
    startTimer,
    pauseTimer,
    stopTimer,
    isRunning,
  } = useTimer(
    convertToSeconds({
      hours: isMobile ? pickerValue.hour : pickHour.value,
      minutes: isMobile ? pickerValue.minute : pickMinute.value,
    })
  );

  const pickTimerConvertSeconds = convertToSeconds({
    hours: isMobile ? pickerValue.hour : pickHour.value,
    minutes: isMobile ? pickerValue.minute : pickMinute.value,
  });

  useEffect(() => {
    setTimer(pickTimerConvertSeconds * 100);
  }, [pickerValue, pickHour, pickMinute]);

  useEffect(() => {
    const settingOk = JSON.parse(localStorage.getItem('setting'));
    if (settingOk) {
      toggleVisibility();
      startTimer();
    }
    if (_.isEmpty(user)) {
      // document.getElementById('timer_alert_modal').showModal();
    }
  }, []);

  const createTimerData = () => {
    const timerData = {
      userUid: user.uid,
      startTime: new Date(),
      endTime: addSecondsToNow(pickTimerConvertSeconds),
      realEndTime: null,
      percentageBaseDay: calculateSecondsPercentage(pickTimerConvertSeconds),
      settingTime: pickTimerConvertSeconds,
      endTimer: null,
    };
    if (!_.isEmpty(user)) {
      // 회원용 api 로직 추가
      createSingleTimer({
        ...timerData,
      })
        .then(res => {
          console.log('res', res.id);

          setDocId(res.id);
        })
        .catch(err => {
          toast.error('에러가 발생하였습니다. 😭');
          console.log('err', err);
        });
    } else {
      // 비회원용 로컬스토리지 로직 추가
      localStorage.setItem('nonMember_timer', JSON.stringify({ ...timerData }));
    }
  };

  const handleSettingTimer = () => {
    if (pickTimerConvertSeconds <= 0) {
      document.getElementById('timer_warning_modal').showModal();
      return;
    }
    toggleVisibility();
    setShowModal(true);
    createTimerData();
  };

  const handleCountComplete = () => {
    setShowModal(false);
    startTimer();
  };

  const handleEndTimer = () => {
    const getLocalData = JSON.parse(localStorage.getItem('nonMember_timer'));
    if (!_.isEmpty(user)) {
      updateTimer({
        docId,
        endTimer: timer / 100,
        realEndTime: new Date(),
        finish: true,
      })
        .then(res => {
          console.log('res', res);
          navigate(`/main/timer/single/result?docid=${docId}`);
        })
        .catch(err => {
          toast.error('에러가 발생하였습니다. 😭');
          console.log('err', err);
        });
    } else {
      localStorage.setItem(
        'nonMember_timer',
        JSON.stringify({
          ...getLocalData,
          docId,
          endTimer: timer / 100,
          realEndTime: new Date(),
          finish: true,
        })
      );
      navigate(`/main/timer/single/result`);
    }
    stopTimer();
  };

  // 세팅 내부 타이머 조절
  const settingTimer = Number(pickTimerConvertSeconds) * 100;

  const mainTimerText = `${hours}시간 ${minutes}분 ${seconds}초`;
  return (
    <ContentFlexContainer>
      <ContentWrapper>
        {/* 설정 패널 */}
        <TransitionPanel
          style={{ display: `${isVisible ? 'none' : ''}` }}
          className={`w-full h-full transition-all duration-500 ease-in-out
            ${
              isVisible
                ? 'translate-y-[-100%] opacity-0'
                : 'translate-y-0 opacity-100'
            }
          `}
        >
          <div
            className={`flex flex-col h-full ${
              isMobile ? '' : 'justify-center'
            }`}
          >
            {/* 기존 설정 관련 컨텐츠 */}
            <div className="flex flex-col">
              {/* <Text typography="h1">TimeFight</Text> */}
              <Spacer top={20} />
              <Text typography={`${isMobile ? 'h5' : 'h4'}`}>
                나만의 개인 맞춤 타이머
              </Text>
              <Spacer top={20} />
              <Text typography={`${isMobile ? 'h6' : 'h5'}`}>
                {`이 간단하고 효율적인 타이머로 집중력을 유지하고 생산성을 높이세요.
            전용시간이 필요한 모든 작업에 사용하세요.`}
              </Text>
            </div>
            <Spacer top={20} />
            {isMobile ? (
              <Picker value={pickerValue} onChange={setPickerValue}>
                {Object.keys(selections).map(name => (
                  <Picker.Column key={name} name={name}>
                    {selections[name].map(option => (
                      <Picker.Item key={option} value={option}>
                        {option + `${name === 'hour' ? '시간' : '분'}`}
                      </Picker.Item>
                    ))}
                  </Picker.Column>
                ))}
              </Picker>
            ) : (
              <div className="flex">
                <CustomSelect
                  options={hoursData}
                  placeholder="타이머 시간을 선택해주세요."
                  selectedOption={pickHour}
                  setSelectedOption={setPickHour}
                />
                <Spacer left={20} />
                <CustomSelect
                  options={minutesData}
                  placeholder="타이머 분을 선택해주세요. (5분단위)"
                  selectedOption={pickMinute}
                  setSelectedOption={setPickMinute}
                />
              </div>
            )}
            <Spacer top={20} />
            <Text typography={isMobile ? 'h5' : 'h3'}>
              설정된 시간{' '}
              {`${dayjs()
                .set('hour', isMobile ? pickerValue.hour : pickHour.value)
                .set('minute', isMobile ? pickerValue.minute : pickMinute.value)
                .set('second', 0)
                .format('HH:mm')} - ${convertToSeconds({
                hours: isMobile ? pickerValue.hour : pickHour.value,
                minutes: isMobile ? pickerValue.minute : pickMinute.value,
              })}초`}
            </Text>
            <Spacer top={20} />
            <Button onClick={handleSettingTimer}>설정하기</Button>
          </div>
        </TransitionPanel>

        {/* 타이머 패널 */}
        <TransitionPanel
          className={`w-full h-full transition-all duration-500 ease-in-out pb-16
            ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-[100%] opacity-0'
            }
          `}
        >
          <div className={`flex flex-col h-full ${isMobile ? '' : 'p-14'}`}>
            {isVisible && (
              <SmoothCircleTimer
                showProgress
                percentage={calculatePercentage(settingTimer, timer)}
                duration={300}
                fullSize
                backgroundColor="#e0e0e0"
                progressColor="#4caf50"
                textColor="#e0e0e0"
                text={mainTimerText}
              />
            )}
            <Spacer top={20} />
            <div className="flex justify-center z-[9999]">
              <button
                onClick={() => startTimer()}
                className={`btn btn-primary text-white w-1/3 ${
                  isRunning ? 'btn-disabled' : ''
                }`}
              >
                <Play />
                시작
              </button>
              <Spacer left={10} />
              <button
                onClick={() => pauseTimer()}
                className={`btn btn-neutral text-white w-1/3 ${
                  isRunning ? '' : 'btn-disabled'
                }`}
              >
                <Pause />
                정지
              </button>
              <Spacer left={10} />
              <button
                onClick={() => handleEndTimer()}
                className={`btn btn-error text-white w-1/3`}
              >
                <TimerOff />
                종료
              </button>
            </div>
            {/* <Button onClick={toggleVisibility}>다시 설정하기</Button> */}
          </div>
        </TransitionPanel>
      </ContentWrapper>
      <dialog id="timer_alert_modal" className="modal">
        <div className="modal-box text-center">
          <Text typography="h3" className="font-bold text-lg text-center">
            알림
          </Text>
          <ModalWrapper>
            <Text typography="h6">
              {`로그인을 하지 않을시`}
              <Text typography="h6" color="red">
                분석 기능
              </Text>
              {`등을 
              사용할 수 없습니다`}
            </Text>
            <Text typography="h6">
              {`유의미한 분석데이터를 
              활용하기 위해서는 로그인을 해주세요.`}
            </Text>
          </ModalWrapper>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="timer_warning_modal" className="modal">
        <div className="modal-box text-center">
          <Text
            typography="h3"
            className="font-bold text-lg text-center text-red-500"
          >
            경고
          </Text>
          <Spacer top={20} />
          <ModalWrapper>
            <Text typography="h6">
              {`값이 0인 시간으로 설정할수 없습니다.
                재설정해주세요
              `}
            </Text>
          </ModalWrapper>
          <Spacer top={20} />
          <Button
            onClick={() =>
              document.getElementById('timer_warning_modal').close()
            }
          >
            확인
          </Button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {showModal && <CountdownModal onComplete={handleCountComplete} />}
    </ContentFlexContainer>
  );
}

// 스타일링된 컴포넌트들
const ContentWrapper = tw.div`
  relative
  w-full
  h-full
  py-5
`;

const TransitionPanel = tw.div`
`;

const ModalWrapper = tw.div`
  flex
  flex-col
  justify-center
  items-center
  gap-7
`;
