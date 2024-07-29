"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
// import AnimatedLink from "./AnimatedLink";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import Container from "../ui/Container";
import { usePathname } from "next/navigation";
import { socialLinks } from "@/assets/mock";
import Magnetic from "../animation/Magnetic";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Degen Wallet", href: "/wallet" },
  { title: "Degen Vault", href: "/vault" },
  { title: "MOOLA", href: "/moola-token" },
  { title: "Governance", href: "/other" },
  { title: "FAQs", href: "#faqs" },
];

const mobileLinkVars = {
  initial: {
    y: "30vh",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const Header = () => {
  const [open, setOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false)

  // const changeBackground = () => {
  //   if (window.scrollY >= 66) {
  //     setScrolled(true)
  //   } else {
  //     setScrolled(false)
  //   }
  // }

  // useEffect(() => {
  //   changeBackground()
  //   window.addEventListener("scroll", changeBackground)

  //   return ()=>{
  //     window.removeEventListener("scroll", changeBackground)
  //   }
  // })

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const pathname = usePathname();

  return (
    <header className={!open ? `left-0 right-0 top-0 z-50` : ""}>
      <Container>
        <Container>
          <nav className="flex items-center justify-between pb-5 pt-6">
            <div className="flex items-center gap-20">
              <Link href="/" className="relative aspect-[16/5] h-10">
                <Image fill src="logo.svg" alt="Logo" />
              </Link>
            </div>
            <div className="text-m hidden gap-6 text-neutral-300 lg:flex xl:gap-10">
              {navLinks.map((link, index) => {
                return (
                  <div className="group relative" key={index}>
                    {/* this condition is  just to disbale links for now  */}
                    {link.title === "Governance" ? (
                      <>
                        <Link
                          data-text={link.title}
                          href="#"
                          className={`chain-link text-sm duration-200 ${
                            pathname == link.href ? "active" : ""
                          }`}
                        >
                          <span className="opacity-0">{link.title}</span>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          data-text={link.title}
                          href={link.href}
                          className={`chain-link text-sm duration-200 ${
                            pathname == link.href ? "active" : ""
                          }`}
                        >
                          <span className="opacity-0">{link.title}</span>
                        </Link>
                      </>
                    )}

                    {link.title === "Governance" ? (
                      <div className="font-small invisible absolute left-1/2 top-full mt-2 w-max -translate-x-1/2 transform rounded-lg bg-gradient-to-br from-[#81114257] to-[#863A5C3E] px-3 py-2 text-xs text-white opacity-0 shadow-md shadow-sm transition-opacity duration-300 group-hover:visible group-hover:opacity-100 dark:bg-gray-700">
                        Coming Soon
                        <div className="tooltip-arrow-icon"></div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-3 sm:flex">
                {socialLinks.map(({ icon, href }, i) => {
                  return (
                    <Link
                      key={i}
                      className="primary-button inline-block"
                      href={href}
                      target="_blank"
                    >
                      <Magnetic className="inline-block flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-[#2A2A2A] to-[#25252580]">
                        <Image
                          src={icon}
                          width={18}
                          height={18}
                          className="object-contain"
                          alt="discord icon"
                        />
                      </Magnetic>
                    </Link>
                  );
                })}
              </div>

              <div
                className="cursor-pointer text-3xl lg:hidden"
                onClick={toggleMenu}
              >
                <FiMenu />
              </div>
            </div>
          </nav>
        </Container>
      </Container>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 z-50 h-screen w-full origin-top bg-neutral-950 p-4 text-neutral-100"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <div className="relative aspect-[2/1] h-10">
                  {/* <Image width={100} height={100} src="logo.svg" alt="Logo" /> */}
                </div>
                <button
                  className="cursor-pointer text-xl "
                  onClick={toggleMenu}
                >
                  <AiOutlineClose />
                </button>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex h-full flex-col items-center justify-center gap-3"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div key={index} className="overflow-hidden">
                      <MobileNavLink title={link.title} href={link.href} />
                    </div>
                  );
                })}
                <motion.div
                  variants={mobileLinkVars}
                  className="absolute bottom-3 flex items-center gap-3 sm:hidden"
                >
                  {socialLinks.map(({ icon, href }, i) => {
                    return (
                      <Link
                        key={i}
                        className="primary-button inline-block"
                        href={href}
                        target="_blank"
                      >
                        <Magnetic className="inline-block flex h-9 w-9 items-center justify-center rounded-full">
                          <Image
                            src={icon}
                            width={18}
                            height={18}
                            className="object-contain"
                            alt="discord icon"
                          />
                        </Magnetic>
                      </Link>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

const MobileNavLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="_uppercase_ text-center text-lg"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
