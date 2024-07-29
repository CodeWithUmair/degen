import React, { ReactNode } from "react";

type Props = {
    children: ReactNode
}

const SectionTitle = ({ children }:Props) => {
  return (
    <h2 className="max-w-[14ch] text-3xl font-black tracking-tight text-white sm:text-4xl lg:leading-[1.2em] lg:text-[2.75rem]">
      {children}
    </h2>
  );
};

export default SectionTitle;
