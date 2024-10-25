import { useCallback, useState } from 'react';

const useSlideTransition = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  // 순수하게 상태값만 반환
  return {
    isVisible,
    toggleVisibility,
  };
};

export default useSlideTransition;
