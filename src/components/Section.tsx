import React from 'react';

import useDeviceType from '@/hooks/useDeviceType';

import useViewportVisible from '../hooks/useViewPortVisible';
import Spacer from './core/Spacer';
import { Text } from './core/Text';

const Section = ({ title, description, imageSrc, index }) => {
  const [sectionRef, isVisible] = useViewportVisible();
  const isMobile = useDeviceType();
  const isOdd = index % 2 !== 0;

  return (
    <div ref={sectionRef} className="py-12">
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} mx-auto`}>
        {isOdd ? (
          <>
            <div
              className={`flex-[2] pr-8 transition-all duration-1000 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <Text typography="h3">{title}</Text>
              <p className="text-base sm:text-lg">{description}</p>
            </div>
            <div
              className={`flex-1 transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <img
                src={imageSrc}
                alt={title}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </>
        ) : (
          <>
            <div
              className={`flex-1 transition-all duration-1000 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <img
                src={imageSrc}
                alt={title}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div
              className={`flex-[2] ${
                isMobile ? '' : 'pl-8'
              } transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <Text typography="h3">{title}</Text>
              <Spacer top={20} />
              <p className="text-base sm:text-lg">{description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Section;
