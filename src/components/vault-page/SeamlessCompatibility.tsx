import Image from "next/image";
import Container from "../ui/Container";
import TwoGrid from "../ui/TwoGrid";
import SectionText from "../typography/SectionText";
import RotateAnimation from "../animation/RotateAnimation";

const SeamlessCompatibility = () => {
  return (
    <section className="relative flex items-center py-24">
      {/* left shadow */}
      <div className="pointer-events-none absolute left-0 top-[25%] -z-10 -translate-x-1/2">
        <div className="shadow-effect opacity-75 blur-[200px]"></div>
      </div>
      {/* right shadow */}
      <div className="pointer-events-none absolute bottom-[25%] right-0 -z-10 -translate-x-1/2">
        <div className="shadow-effect opacity-75 blur-[200px]"></div>
      </div>
      <div className="absolute -right-[10px] top-0 -z-10 w-[75%] -rotate-12 -scale-x-1">
        <div className="relative aspect-[1.8] w-full">
          <Image
            fill
            src="/images/vault/vault-hero-line.svg"
            alt="design asset line"
          />
        </div>
      </div>

      <Container>
        <TwoGrid>
          <SectionText
            title="Seamless Compatibility"
            desc="Degen Vault perfectly communicates with both IOS and Android
              devices using NFC technology, eliminating the need for cords,
              charging, or Bluetooth. Your pocket-sized crypto safehouse is here
            "
          />
          <RotateAnimation
            left
            className="relative mx-auto aspect-square w-full rounded-3xl"
          >
            <Image
              fill
              alt="Violin"
              src="/images/vault/seamless-compatiblity.png"
              className="mx-auto h-full w-[75%] object-contain sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
            />
          </RotateAnimation>
        </TwoGrid>
      </Container>
    </section>
  );
};

export default SeamlessCompatibility;
