import Container from "@/components/ui/Container";
import React from "react";
import { termsData } from "@/assets/wallet-terms";

const TermsOfService = () => {
  return (
    <main>
      <section className="sec-p-y relative">
        <div className="absolute left-0 top-0 -z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="shadow-effect blur-[300px]"></div>
        </div>
        <Container>
        <Container>
          <article id="post-745">
            <header className="mb-6">
              <h1 className="_capitalize_ pb-8 text-5xl font-black">
                {termsData.main_title}
              </h1>
            </header>

            <div className="prose flex max-w-none flex-col gap-4">
              <h4 className="text-2xl font-semibold">{termsData.title}</h4>

              {termsData.sections.map((section, index) => (
                <React.Fragment key={index}>
                  <h4 className="text-2xl font-semibold">
                    {section.bold_text}
                  </h4>
                  <p className="text-lg font-medium text-neutral-400">
                    {section.text}
                  </p>
                </React.Fragment>
              ))}

           
            </div>
          </article>
        </Container>
        </Container>
      </section>
    </main>
  );
};

export default TermsOfService;
