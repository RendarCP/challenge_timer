import { useEffect, useState } from 'react';

const useDeviceType = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkDeviceType();

    window.addEventListener('resize', checkDeviceType);

    return () => window.removeEventListener('resize', checkDeviceType);
  }, [breakpoint]);

  if (typeof window === 'undefined') {
    return false; // 또는 null, 혹은 기본값으로 설정하고 싶은 값
  }

  return isMobile;
};

export default useDeviceType;
