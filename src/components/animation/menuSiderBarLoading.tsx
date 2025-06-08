import React, { useState, useEffect } from 'react';

interface MenuSiderBarLoadingProps {
  text?: string;
  speed?: number;
  maxDots?: number;
}

export default function MenuSiderBarLoading({
  text = 'Loading',
  speed = 300,
  maxDots = 3,
}: MenuSiderBarLoadingProps) {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setDotCount((prevCount: number) => {
        return prevCount >= maxDots ? 0 : prevCount + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [speed, maxDots]);

  const dots = '.'.repeat(dotCount);
  return (
    <>
      {text}
      {dots}
    </>
  );
}
