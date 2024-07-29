import React from "react";

type PropTypes = {
  fluid?: boolean;
  shrink?: boolean;
  children: JSX.Element | JSX.Element[];
  className?: string;
};

const Container = ({ fluid = false, children, shrink=false, className }: PropTypes) => {
  return (
    <div
      className={`mx-auto w-full ${shrink? "max-w-[70rem]": "max-w-screen-2xl"} px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
