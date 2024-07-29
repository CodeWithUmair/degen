import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SmoothScroll from "@/components/animation/SmoothScroll";
import Preloader from "@/components/ui/Preloader";
import { DegenProvider } from "@/context/DegenContext"; // Import DegenProvider
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ReservoirContextProvider } from "@/context/ReservoirContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Degen Forest",
  description: "Your Bank, Your Crypto, Your Freedom",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="select-none overflow-x-hidden">
      <head>
        {/* Google tag (gtag.js) */}
        <GoogleAnalytics />
      </head>
      <ReservoirContextProvider>
        <DegenProvider>
          <body className="w-full overflow-x-hidden font-primary">
            <Preloader />
            <SmoothScroll />
            <Header />
            <div className="pointer-events-none fixed inset-0 z-50 bg-white/5"></div>
            {children}
            <Footer />
          </body>
        </DegenProvider>
      </ReservoirContextProvider>
    </html>
  );
}
