import { hours, minutes } from '@/constant/timeConst';
import dayjs from 'dayjs';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import Picker from 'react-mobile-picker';

import CustomSelect from '@/components/core/Select';
import Spacer from '@/components/core/Spacer';
import { Text } from '@/components/core/Text';

import useDeviceType from '@/hooks/useDeviceType';
import { useUserCheck } from '@/hooks/useUserCheck';

import {
  ContentFlexContainer,
  ContentPureContainer,
} from '@/styles/MainContainer';

const selections = {
  hour: [...hours.map(h => h.value)],
  minute: [...minutes.map(m => m.value)],
  // title: ['Mr.', 'Mrs.', 'Ms.', 'Dr.'],
  // firstName: ['John', 'Micheal', 'Elizabeth'],
  // lastName: ['Lennon', 'Jackson', 'Jordan', 'Legend', 'Taylor'],
};

export default function SingleTimer() {
  const { user } = useUserCheck();
  const isMobile = useDeviceType();
  // pc 전용 상태
  const [pickHour, setPickHour] = useState({});
  const [pickMinute, setPickMinute] = useState({});
  // 모바일전용
  const [pickerValue, setPickerValue] = useState({
    hour: 1,
    minute: 0,
  });
  console.log('pickerValue', pickerValue);
  console.log('pickHour', pickHour);
  console.log('pickMinute', pickMinute);
  console.log('isMobile', isMobile);

  console.log(
    '====================',
    dayjs()
      .set('hour', pickHour.value)
      .set('minute', pickMinute.value)
      .set('second', 0)
      .format('HH:mm')
  );

  useEffect(() => {
    const updatedTime = dayjs()
      .add(pickHour.value, 'hour')
      .add(pickMinute.value, 'minute');
    console.log('updatedTime', updatedTime.format('YYYY-MM-DD HH:mm'));
  }, [pickHour, pickMinute]);

  useEffect(() => {
    if (_.isEmpty(user)) {
      // document.getElementById('timer_alert_modal').showModal();
    }
  }, []);
  return (
    <ContentFlexContainer>
      <div>
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
              options={hours}
              placeholder="타이머 시간을 선택해주세요."
              selectedOption={pickHour}
              setSelectedOption={setPickHour}
            />
            <Spacer left={20} />
            <CustomSelect
              options={minutes}
              placeholder="타이머 분을 선택해주세요. (5분단위)"
              selectedOption={pickMinute}
              setSelectedOption={setPickMinute}
            />
          </div>
        )}
      </div>
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
