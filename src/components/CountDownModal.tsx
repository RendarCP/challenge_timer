import { useEffect, useState } from 'react';

const CountdownModal = ({ onComplete }) => {
  const [count, setCount] = useState(5);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
      <div className="text-9xl font-bold text-center text-white">
        {count > 0 ? count : '시작!'}
      </div>
    </div>
  );
};

export default CountdownModal;
