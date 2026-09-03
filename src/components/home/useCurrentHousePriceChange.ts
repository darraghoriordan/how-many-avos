import { useEffect, useState } from "react";

export function getChangeSoFarToday(dailyChange: number, now = new Date()) {
  const secondsToday = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  return secondsToday * (dailyChange / 86_400);
}

export function annualPercentageToDailyDollarChange(currentValue: number, annualChangePercent: number) {
  const previousValue = currentValue / (1 + annualChangePercent / 100);
  return (currentValue - previousValue) / 365;
}

export default function useCurrentHousePriceChange(dailyChange: number) {
  const [change, setChange] = useState(() => getChangeSoFarToday(dailyChange));

  useEffect(() => {
    const intervalId = window.setInterval(() => setChange(getChangeSoFarToday(dailyChange)), 1000);
    return () => window.clearInterval(intervalId);
  }, [dailyChange]);

  return change;
}
