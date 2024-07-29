"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  left?: boolean;
  [key: string]: any;
};

const RotateAnimation = ({ children, left = false, ...rest }: Props) => {
  const showRef = useRef(null);
  const hideRef = useRef(null);
  const isInView = useInView(showRef);
  const notHiding = useInView(hideRef);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("whileInView");
    } else if (!notHiding) {
      mainControls.start("initial");
    }
  }, [isInView, notHiding]);

  const rotate = left ? -15 : 15;
  const x = left ? -100 : 100;

  const variants = {
    initial: { scale: 0.75, rotate, y: 100, opacity: 0, x },
    whileInView: { y: 0, scale: 1, rotate: 0, opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="relative"
      variants={variants}
      animate={mainControls}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 0.1,
      }}
      {...rest}
    >
      <div ref={hideRef} className="absolute inset-0"></div>
      <div ref={showRef} className="absolute left-0 right-0 top-1/2"></div>
      {children}
    </motion.div>
  );
};

export default RotateAnimation;
