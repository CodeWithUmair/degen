import { motion } from "framer-motion";
import React, { ReactNode, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  stiffness?: number;
  damping?: number;
  mass?: number;
  [key: string]: any;
};

const Magnetic = ({
  children,
  stiffness = 150,
  damping = 15,
  mass = 0.1,
  ...rest
}: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (ref.current) {
      const { width, height, top, left } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({ x, y });
    }
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: .1 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
