"use client";
import Image from "next/image";
import Container from "../ui/Container";
import TwoGrid from "../ui/TwoGrid";
import RotateAnimation from "../animation/RotateAnimation";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";

const VaultWhy = () => {
  const listItems = [
    {
      icon: "/images/icons/why-vault-1.png",
      title: "User-Centric Design:",
      text: "Simple app and a sleek metal card. No need for cables, continuous charging, or intricate user interfaces",
    },
    {
      icon: "/images/icons/why-vault-2.png",
      title: "Absolute Privacy:",
      text: "Your keys, your crypto. We never store or share your recovery phrase, ensuring your digital assets remain truly yours.",
    },
    {
      icon: "/images/icons/why-vault-3.png",
      title: "Future-Ready:",
      text: "Apart from tokens and cryptocurrencies, Degen Vault is also primed to securely store and manage your NFTs and other Digital Assets.",
    },
  ];
  return (
    <section className="relative flex min-h-[768px] items-center">
      {/* left shadow */}
      <div className="absolute bottom-[25%] left-[3%] -z-10 translate-x-1/2">
        <div className="shadow-effect opacity-50 blur-[200px]"></div>
      </div>
      {/* right shadow */}
      <div className="absolute bottom-[25%] right-[3%] -z-10 translate-x-1/2">
        <div className="shadow-effect opacity-50 blur-[200px]"></div>
      </div>
      <Container>
        <TwoGrid>
          <div className="row-start-1 lg:row-start-auto">
            <RotateAnimation
              left
              className="relative mx-auto aspect-square w-full rounded-3xl"
            >
              <Image
                src="/images/vault/why-vault.png"
                className="rounded-3xl object-contain"
                fill
                alt="About Arbitrum Figure"
              ></Image>
            </RotateAnimation>
          </div>
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
          >
            <motion.h2
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mb-8 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2em]"
            >
              Why Choose{" "}
              <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345]  to-[#CB4CC4] bg-clip-text text-transparent">
                Degen Vault
              </span>{" "}
            </motion.h2>

            {listItems.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  variants={FADE_UP_ANIMATION_VARIANTS}
                  className="w-full"
                >
                  <ListItem key={index} data={item} />
                </motion.div>
              );
            })}
          </motion.div>
        </TwoGrid>
      </Container>
    </section>
  );
};

export default VaultWhy;

type ItemProps = {
  data: {
    icon: string;
    title: string;
    text: string;
  };
};

const ListItem = ({ data }: ItemProps) => {
  return (
    <div className="flex items-start gap-4 py-4">
      <div className="aspect-square shrink-0 rounded-full bg-[#FF658925] p-4">
        <div className="relative h-8 w-8">
          <Image
            fill
            className="object-contain"
            src={data.icon}
            alt="Message Icon"
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold leading-loose">{data.title}</h3>

        <p className="max-w-[40ch] text-lg leading-relaxed">{data.text}</p>
      </div>
    </div>
  );
};
