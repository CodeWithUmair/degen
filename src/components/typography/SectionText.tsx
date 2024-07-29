"use client"
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import { motion } from "framer-motion";
import React from "react";
import SectionTitle from "./SectionTitle";

type Props = {
  title: string;
  desc: string;
};

const SectionText = ({ title, desc }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
      className="flex flex-col items-start gap-4"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        <SectionTitle>{title}</SectionTitle>
      </motion.div>

      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="sm:text-xl max-w-[37ch] _capitalize_ tracking-wide text-neutral-400"
      >
        {desc}
      </motion.p>
    </motion.div>
  );
};

export default SectionText;
