
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
    targetDate: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const calculateTimeLeft = (): TimeLeft | null => {
        const difference = +new Date(targetDate) - +new Date();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return null;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [targetDate]);

    if (!timeLeft) {
        return <div className="text-2xl font-bold text-dw-gold">The event has begun!</div>;
    }

    const timeParts = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {timeParts.map((part, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <div className="text-4xl lg:text-5xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-dw-green to-dw-gold">
                        {String(part.value).padStart(2, '0')}
                    </div>
                    <div className="text-sm uppercase tracking-widest text-gray-300 mt-1">{part.label}</div>
                </div>
            ))}
        </div>
    );
};

export default CountdownTimer;
