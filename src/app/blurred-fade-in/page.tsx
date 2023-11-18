import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import FadiIn from "@/components/FadeIn/FadiIn";
import { Container } from "@/components/container/Container";
import Code from "@/components/code/Code";

export default function BlurredFadeIn() {
  return (
    <section>
      <Container>
        <PageWrapper title="Blurred fade-in">
          <FadiIn />
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
