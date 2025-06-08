import React, { useState, useEffect } from 'react';
export default function MenuSiderBarLoading({ text = 'Loading', speed = 300, maxDots = 3, }) {
    const [dotCount, setDotCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setDotCount((prevCount) => {
                return prevCount >= maxDots ? 0 : prevCount + 1;
            });
        }, speed);
        return () => clearInterval(interval);
    }, [speed, maxDots]);
    const dots = '.'.repeat(dotCount);
    return (React.createElement(React.Fragment, null,
        text,
        dots));
}
