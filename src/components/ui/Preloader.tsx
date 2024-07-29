"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Set loading to false after the desired timeout (e.g., 2000 milliseconds)
      setIsLoading(false);
    }, 2000); // Adjust the timeout value as needed (in milliseconds)

    // Clear the timeout if the component is unmounted before the timeout completes
    return () => clearTimeout(timeoutId);
  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    <div
      className={`fixed right-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black ${
        isLoading ? "" : "hidden"
      }`}
    >
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-[#E4334599]">
        
      </div>
    </div>
  );
};

export default Preloader;
