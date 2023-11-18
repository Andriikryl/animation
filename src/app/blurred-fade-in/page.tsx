import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import { Container } from "@/components/container/Container";
import Code from "@/components/code/Code";
import BlurredFadeIn from "@/components/BlurredFade-In/BlurredFadeIn";

export default function BlurredFadeInP() {
  return (
    <section>
      <Container>
        <PageWrapper title="Blurred fade-in">
          <BlurredFadeIn />
        </PageWrapper>
        <Code
          code=".box:hover{
            animation: fade-in 0.9s ease-in-out;
        }
        @keyframes fade-in {
            0%{
                filter: blur(5px);
                opacity: 0;
              }
              100% {
                filter: blur(0);
                opacity: 1;
              }
        }"
        />
      </Container>
    </section>
  );
}
