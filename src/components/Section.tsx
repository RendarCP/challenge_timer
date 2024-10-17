import React from 'react';

import useViewportVisible from '@/hooks/useViewPortVisible';

import { Text } from './core/Text';

const Section = ({ title, description, imageSrc, index }) => {
  const [sectionRef, isVisible] = useViewportVisible();
  const isOdd = index % 2 !== 0;

  return (
    <div ref={sectionRef} className="py-12 px-4 sm:px-8 h-3/4">
      <div className={`flex flex-row items-center max-w-6xl mx-auto`}>
        {isOdd ? (
          <>
            <div
              className={`w-1/2 pr-8 transition-all duration-1000 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <Text typography="h2">{title}</Text>
              <p className="text-base sm:text-lg">{description}</p>
            </div>
            <div
              className={`w-1/2 transition-all duration-1000 ease-out delay-300 ${
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
              className={`w-1/2 transition-all duration-1000 ease-out ${
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
              className={`w-1/2 pl-8 transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <Text typography="h2">{title}</Text>
              <p className="text-base sm:text-lg">{description}</p>
              <Text typography="h5">테스트</Text>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Section;
