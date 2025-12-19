import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
    target: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, duration = 2000, prefix = '', suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasStarted) {
                setHasStarted(true);
            }
        }, { threshold: 0.1 });

        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [hasStarted, target, duration]);

    return (
        <div ref={elementRef} className="tabular-nums inline-block">
            {prefix}{count.toLocaleString()}{suffix}
        </div>
    );
};

export default AnimatedCounter;
