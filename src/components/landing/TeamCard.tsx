import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

type Props = {
  member: {
    [key: string]: string;
  };
};

const TeamCard = ({ member: { img, title, subtitle, desc } }: Props) => {
  return (
    <article className="md:rounded-3xl bg-gradient-to-bl from-[#D83E824A] to-[#28222480] p-6 md:p-8 pb-12 backdrop-blur-[10px] h-full w-full">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image fill src={img} alt="nftImage" />
      </div>
      <h3 className="pt-4 text-center md:text-2xl font-bold">{title}</h3>
      <p className="text-gradient-sm text-center text-sm md:text-base font-black">{subtitle}</p>

      <p className="mt-4 sm:mt-8 text-center text-sm sm:text-base text-neutral-400">{desc}</p>
    </article>
  );
};

export default TeamCard;
