import { useEffect, useState } from 'react';

export const useCountdownTimer = (maxCount: number): [number, () => void] => {
  const [timeLeft, setTimeLeft] = useState(maxCount);
  const tick = () => setTimeLeft((t) => t - 1);
  const reset = () => setTimeLeft(maxCount);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() =>{
    if(timeLeft === 0) reset();

  }, [timeLeft, maxCount]);

  return [timeLeft, reset];
};
