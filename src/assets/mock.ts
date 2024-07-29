export const dropdownOptions = [
  {
    id: 1,
    label: "Moola",
    icon: "/images/icons/moola.svg",
  },
  {
    id: 2,
    label: "USD",
    icon: "/images/icons/usd.png",
  },
];

export const heroStats = [
  {
    label: "Total Revenue",
    value: "$327,156,262.00",
    icon: "/images/icons/revenue.svg",
  },
  {
    label: "DAO Reserves",
    value: "$327,156,262.00",
    icon: "/images/icons/reserves.svg",
  },
  {
    label: "Tokens Burned",
    value: "$109,286,564.00",
    icon: "/images/icons/burn.svg",
  },
  {
    label: "Operations",
    value: "$109,286,564.00",
    icon: "/images/icons/operations.svg",
  },
];

export const socialLinks = [

  {
    icon: "/images/icons/telegram.png",
    href: "https://t.me/degenforestdao",
  },
  {
    icon: "/images/icons/discord.svg",
    href: "https://discord.com/invite/ATES8Kcwd8",
  },
  {
    icon: "/images/icons/x.svg",
    href: "https://x.com/0xdegenforest",
  },
  {
    icon: "/images/icons/youtube.svg",
    href: "https://www.youtube.com/@degenforest/",
  },
  {
    icon: "/images/icons/opensea.svg",
    href: "https://opensea.io/collection/degenforestdao",
  },
];

export const collectionData = [
  {
    img: "/images/landing/collection-1.png",
    title: "Metamorph",
    user: "@Reaflu",
    amount: 0.5,
  },
  {
    img: "/images/landing/collection-2.png",
    title: "Moonshine",
    user: "@Reaflu",
    amount: 0.5,
  },
  {
    img: "/images/landing/collection-3.png",
    title: "Inception",
    user: "@Reaflu",
    amount: 0.5,
  },
  {
    img: "/images/landing/collection-1.png",
    title: "Metamorph",
    user: "@Reaflu",
    amount: 0.5,
  },
  {
    img: "/images/landing/collection-2.png",
    title: "Moonshine",
    user: "@Reaflu",
    amount: 0.5,
  },
  {
    img: "/images/landing/collection-3.png",
    title: "Inception",
    user: "@Reaflu",
    amount: 0.5,
  },
];

export const comparisonData = [
  {
    feature: "Non - Custodial",
    values: [true, true, true],
  },
  {
    feature: "DeFi Swaps",
    values: [true, false, true],
  },
  {
    feature: "NFT Transfers",
    values: [true, true, true],
  },
  {
    feature: "Liquid Staking",
    values: [true, false, false],
  },
  {
    feature: "DeFi Loans",
    values: [true, false, false],
  },
  {
    feature: "3 factor Authentication",
    values: [true, false, false],
  },
  {
    feature: "Zero Friction Onboarding",
    values: [true, false, false],
  },
];

export const team = [
  {
    img: "/images/landing/team-1.png",
    title: "DegenApe",
    subtitle: "Tech Visionary",
    desc: "Degen since 2013. Now on a mission for Web3 mass adoption. Kick Ass Art + Utility + Blockchain = NFT. Gains are nothing, freedom is everything.",
  },
  {
    img: "/images/landing/team-2.png",
    title: "WildMonkeyDegen",
    subtitle: "Tech Fundamentalist",
    desc: "Web1 born and raised geek, Web2 architect and developer, Web3 ready degen: From building robots on mainframes to building bots for the metaverse.",
  },
  {
    img: "/images/landing/team-3.png",
    title: "Relentless",
    subtitle: "Master of Code",
    desc: "Forged in the Telecom sector building mass-scale mobile networks now converted into Web3 developing the next generation of mass-scale blockchain tools ready for mass adoption.",
  },
  {
    img: "/images/landing/team-4.jpg",
    title: "AJ",
    subtitle: "Master of APAC Operations",
    desc: "AJ is an entrepreneur in the tech and FinTech area. In the last 18 years, he helped companies access the Korean market, started several companies, and established relationships with Gemalto, Samsung, LG, etc. Then he entered the untapped institutional robo-advise market and started Synthetic Advisors with FiveT Capital.",
  },
];

export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: .5 } },
};

export const staggeredSlide = {
  initial: (index: number) => ({
    opacity: 0,
    x: 100,
    transition: {
      delay: 0,
      duration: 0.25,
    },
  }),
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.25,
    },
  }),
};

export const staggeredPop = {
  initial: (index: number) => ({
    opacity: 0.5,
    scale: 0,
    transition: {
      delay: 0,
      duration: 0.25,
    },
  }),
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2 * index,
      duration: 0.3,
    },
  }),
};
