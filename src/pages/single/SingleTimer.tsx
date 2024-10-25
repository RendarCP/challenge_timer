import { hoursData, minutesData } from '@/constant/timeConst';
import { convertToSeconds } from '@/modules/function';
import dayjs from 'dayjs';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import Picker from 'react-mobile-picker';
import tw from 'twin.macro';

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
  // title: ['Mr.', 'Mrs.', 'Ms.', 'Dr.'],
  // firstName: ['John', 'Micheal', 'Elizabeth'],
  // lastName: ['Lennon', 'Jackson', 'Jordan', 'Legend', 'Taylor'],
};

export default function SingleTimer() {
  const { user } = useUserCheck();
  const isMobile = useDeviceType();
  const { isVisible, toggleVisibility } = useSlideTransition();

  // pc 전용 상태
  const [pickHour, setPickHour] = useState({ ...hoursData[0] });
  const [pickMinute, setPickMinute] = useState({ ...minutesData[0] });
  // 모바일전용
  const [pickerValue, setPickerValue] = useState({
    hour: 1,
    minute: 0,
  });
  const { hours, minutes, seconds, timer, setTimer, startTimer, pauseTimer } =
    useTimer(
      convertToSeconds({
        hours: isMobile ? pickerValue.hour : pickHour.value,
        minutes: isMobile ? pickerValue.minute : pickMinute.value,
      })
    );

  useEffect(() => {
    setTimer(
      convertToSeconds({
        hours: isMobile ? pickerValue.hour : pickHour.value,
        minutes: isMobile ? pickerValue.minute : pickMinute.value,
      }) * 100
    );
  }, [pickerValue, pickHour, pickMinute]);

  useEffect(() => {
    if (_.isEmpty(user)) {
      // document.getElementById('timer_alert_modal').showModal();
    }
  }, []);
  const mainTimerText = `${hours}시간 ${minutes}분 ${seconds}초`;
  return (
    <ContentFlexContainer>
      {/* 설정 */}
      {/* 타이머 */}
      <ContentWrapper>
        {/* 설정 패널 */}
        <TransitionPanel
          className={`
            absolute inset-0 w-full transition-all duration-500 ease-in-out
            ${
              isVisible
                ? 'translate-y-[-100%] opacity-0'
                : 'translate-y-0 opacity-100'
            }
          `}
        >
          <div className="flex flex-col h-full justify-center">
            {/* 기존 설정 관련 컨텐츠 */}
            <div className="flex flex-col">
              {/* <Text typography="h1">TimeFight</Text> */}
              <Spacer top={20} />
              <Text typography="h4">나만의 개인 맞춤 타이머</Text>
              <Spacer top={20} />
              <Text typography="h5">
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
            <Button onClick={toggleVisibility}>설정하기</Button>
          </div>
        </TransitionPanel>

        {/* 타이머 패널 */}
        <TransitionPanel
          className={`
            absolute inset-0 w-full transition-all duration-500 ease-in-out
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
                percentage={Math.floor(
                  Number(
                    timer /
                      convertToSeconds({
                        hours: isMobile ? pickerValue.hour : pickHour.value,
                        minutes: isMobile
                          ? pickerValue.minute
                          : pickMinute.value,
                      })
                  ) * 100
                )}
                duration={300}
                fullSize
                backgroundColor="#e0e0e0"
                progressColor="#4caf50"
                textColor="#e0e0e0"
                text={mainTimerText}
              />
            )}
            <Spacer top={20} />
            <div className="flex justify-center">
              <button className="btn btn-primary w-1/3">시작</button>
              <Spacer left={10} />
              <button className="btn btn-neutral w-1/3">정지</button>
              <Spacer left={10} />
              <button className="btn btn-error w-1/3">종료</button>
            </div>
            {/* <Button onClick={toggleVisibility}>다시 설정하기</Button> */}
          </div>
        </TransitionPanel>
      </ContentWrapper>
      {/* <Wrapper
        className={`
          flex flex-col w-full transition-all duration-500 ease-in-out
          ${
            isVisible
              ? 'opacity-100 translate-y-0 h-full'
              : 'opacity-0 translate-y-full'
          }
        `}
      >
        <SmoothCircleTimer
          percentage={Math.floor(
            Number(
              timer /
                convertToSeconds({
                  hours: isMobile ? pickerValue.hour : pickHour.value,
                  minutes: isMobile ? pickerValue.minute : pickMinute.value,
                })
            ) * 100
          )}
          duration={300}
          fullSize
          backgroundColor="#e0e0e0"
          progressColor="#4caf50"
          textColor="#e0e0e0"
          text={mainTimerText}
        />
        <Button onClick={toggleVisibility}>다시 설정하기</Button>
      </Wrapper> */}
      <dialog id="timer_alert_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">알림</h3>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </ContentFlexContainer>
  );
}

const Wrapper = tw.div`
  relative 
`;

// 스타일링된 컴포넌트들
const ContentWrapper = tw.div`
  relative
  w-full
  h-screen
  overflow-hidden
`;

const TransitionPanel = tw.div`
  flex
  flex-col
  p-4
`;
