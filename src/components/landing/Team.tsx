"use client";
import React, { useEffect, useRef } from "react";
import Container from "../ui/Container";
import TeamCard from "./TeamCard";
import Image from "next/image";
import { staggeredPop, team } from "@/assets/mock";
import { motion, useAnimation, useInView } from "framer-motion";

const Team = () => {
  const showRef = useRef(null);
  const isInView = useInView(showRef);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    } else {
      mainControls.start("initial");
    }
  }, [isInView]);

  return (
    <section className="relative flex items-center pb-24 ">
      <div className="absolute -left-[10%] top-0 -z-10">
        <div className="shadow-effect blur-[250px]"></div>
      </div>
      <Container>
        <Container>
          <h2 className="mb-6 text-center text-3xl font-black tracking-tight text-white md:mb-12 lg:text-4xl">
            Our
            <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345]  to-[#CB4CC4] bg-clip-text text-transparent">
              &nbsp;Team
            </span>
          </h2>
          <div
            ref={showRef}
            className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="absolute left-0 top-0 -z-10 -translate-x-1/3 -translate-y-1/3">
              <div className="relative aspect-[1] w-[225px]">
                <Image
                  fill
                  className="object-contain"
                  src="/images/landing/cta-circle.svg"
                  alt="design asset line"
                />
              </div>
            </div>
            {team.map((member, i) => {
              return (
                <motion.div
                  key={i}
                  variants={staggeredPop}
                  initial="initial"
                  animate={mainControls}
                  custom={i}
                  // className={
                  //   "w-[85%]" +
                  //   (i === 0 ? " ms-auto" : i === 1 ? " mx-auto" : " me-auto")
                  // }
                >
                  <TeamCard member={member} />
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Container>
      {/* --------------shapes below ------------- */}
      <div className="absolute left-0 top-[10%] -z-10 -rotate-3">
        <div className="relative aspect-[1] w-full">
          <Image
            fill
            className="object-contain"
            src="/images/landing/cta-circle.svg"
            alt="design asset line"
          />
        </div>
      </div>
      {/* -------------------shapes above------------------ */}
    </section>
  );
};

export default Team;
