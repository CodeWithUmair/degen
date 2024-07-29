"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const NotificationBar = () => {
  const endTime = 1718611110; // End time in UNIX timestamp

  const calculateTimeLeft = () => {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in UNIX timestamp
    return endTime - currentTime;
  };

  const [timeLeft, setTimeLeft] = useState<number | null>(calculateTimeLeft());
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // Retrieve the visibility state from localStorage
    const storedVisibility = localStorage.getItem("notificationVisible");
    if (storedVisibility === "false") {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    // Initialize the timer
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime && prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const months = Math.floor(seconds / (30 * 24 * 60 * 60));
    const days = Math.floor((seconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = seconds % 60;
    return `${days} day${days !== 1 ? "s" : ""} ${hours} hr${hours !== 1 ? "s" : ""} ${minutes} min `;
  };

  const handleHideNotification = () => {
    setIsVisible(false);
    // localStorage.setItem("notificationVisible", "false");
  };

  if (!isVisible || timeLeft === null) return null;

  return (
    <div className="fixed left-0 right-0  top-0 z-50 flex h-[50px] items-center justify-between bg-gradient-to-br from-[#F8A55F] via-[#E43345] via-[#E43345] to-[#CB4CC4] px-8 text-xs text-white">
      <div>{/* MOOLA will be live soon.{' '} */}</div>
      <div className="ml-4">
        <span className="countdown text-base  ">
          {" "}
          Road to Our IEO on the P2B Exchange{" "}
          <span className="text-base font-bold">
            {formatTime(timeLeft)}
          </span>{" "}
          <span className="underline">
            {" "}
            <Link
              href="https://p2pb2b.com/token-sale/MOOLA-709/"
              target="_blank"
            >
              {" "}
              Join Now
            </Link>
          </span>
        </span>
      </div>
      <button className="ml-4 text-2xl" onClick={handleHideNotification}>
        &times;
      </button>
    </div>
  );
};

export default NotificationBar;
