"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const MoolaTokenTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);
  const targetDate: Date = new Date(Date.UTC(2024, 5, 24, 14, 0, 0)); // June 24th, 2:00 PM UTC

  const calculateTimeLeft = () => {
    const now: number = new Date().getTime();

    const difference: number = now - targetDate.getTime();

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }
  };

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return null; // Or a placeholder/loading state
  }

  return (
    <>
      <div className="mx-auto flex flex-col gap-4 lg:flex-row max-w-[1000px] items-center justify-around rounded-lg p-4 text-white shadow-lg">
        <div className="text-start">
          <p className="text-lg md:text-3xl">Get Ready for the Next <br /> Token <span className="text-orange-500">Burn</span>🔥</p>
        
        </div>
       
       <div className="flex flex-col justify-center items-center gap-5">
       <div className="flex-wrap items-center justify-center sm:space-x-4 space-x-2 mx-2 sm:mx-4 flex">
          <div className="mt-2 rounded-2xl timer-gradient p-5 w-28 h-28 text-center ml-2">
            <p className="text-3xl font-bold">
              {String(timeLeft.days).padStart(2, "0")}
            </p>
            <p className="mt-2 text-xs font-thin text-gray-400">DAYS</p>
          </div>
          <div className="mt-2 rounded-2xl timer-gradient p-5 w-28 h-28 text-center">
            <p className="text-3xl font-bold">
              {String(timeLeft.hours).padStart(2, "0")}
            </p>
            <p className="mt-2 text-xs font-thin text-gray-400">HOURS</p>
          </div>
          <div className="mt-2 rounded-2xl timer-gradient p-5 w-28 h-28 text-center">
            <p className="text-3xl font-bold">
              {String(timeLeft.minutes).padStart(2, "0")}
            </p>
            <p className="mt-2 text-xs font-thin text-gray-400">MINUTES</p>
          </div>
          <div className="mt-2 rounded-2xl timer-gradient p-5 w-28 h-28 text-center">
            <p className="text-3xl font-bold">
              {String(timeLeft.seconds).padStart(2, "0")}
            </p>
            <p className="mt-2 text-xs font-thin text-gray-400">SECONDS</p>
          </div>
        </div>
      <div className="flex max-w-[620px] mx-auto justify-end items-center gap-5">
        <div className="mt-3">
          <Image
            src="/images/landing/dash1.png"
            alt="dash1"
            width={50}
            height={8}
            className="rotate-180"
          />
        </div>
        <div className="text-lg">Since Last Burn</div>
        <div className="mt-3">
          <Image
            src="/images/landing/dash1.png"
            alt="dash2"
            width={50}
            height={8}
          />
        </div>
      </div>
       </div>
      </div>


    </>
  );
};

export default MoolaTokenTimer;
