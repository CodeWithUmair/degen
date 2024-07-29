import React, { ReactNode } from "react";
import { twMerge as tw } from "tailwind-merge";

type Props = {
  children: ReactNode;
  reverse?: boolean;
  itemsStart?: boolean;
  className?: string;
};

const TwoGrid = ({
  children,
  reverse = false,
  itemsStart,
  className = "",
}: Props) => {
  return (
    <div
      className={tw(
        `grid-reverse sec-gap mx-auto flex max-w-md flex-col lg:grid lg:max-w-[3000px] lg:grid-cols-2 ${
          itemsStart ? "" : "lg:items-center"
        } ${reverse ? "flex-col-reverse" : "group-even:flex-col-reverse"}`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default TwoGrid;
