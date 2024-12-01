import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-01-25T00:00:00');

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-1 max-w-2xl mx-auto">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="text-center">
          <div className="bg-black text-white rounded-lg p-4 shadow-lg">
            <div className="text-4xl font-bold mb-1">{value}</div>
            <div className="text-sm uppercase tracking-wider">{key}</div>
          </div>
        </div>
      ))}
    </div>
  );
}