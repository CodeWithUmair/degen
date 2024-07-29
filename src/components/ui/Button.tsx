import React, { ReactNode } from "react";

type PropTypes = {
  children: JSX.Element | string | ReactNode;
  variant?: string;
  fullWidth?: boolean;
  className?: string;
  customVariant?: string; //takes in tailwind class including background color and text color
  iconUrl?: string; // URL of the icon image
  [key: string]: any;
};

const variants: { [key: string]: string } = {
  neutral: "bg-neutral-800 text-neutral-300",
  primary:
    "block rounded-full bg-gradient-to-br from-[#F8A55F] via-[#E43345] via-[#E43345] to-[#CB4CC4] px-6 py-2 text-center text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 disabled:cursor-not-allowed sm:px-12 sm:py-3.5",
  success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
  tableButton:
    "rounded-xl bg-gradient-to-br from-[#F8A55F] via-[#E43345] via-[#E43345] to-[#CB4CC4] px-6 py-2 text-center text-sm font-medium text-white",
};

const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  customVariant,
  iconUrl,
  ...rest
}: PropTypes) => {
  return (
    <button
      {...rest}
      className={`${customVariant ? customVariant : variants[variant]} ${
        fullWidth ? "w-full" : ""
      } flex items-center justify-center rounded px-5`}
    >
      {children}
      {iconUrl && <img src={iconUrl} alt="icon" className="ml-2 h-5 w-4" />}
    </button>
  );
};

export default Button;
