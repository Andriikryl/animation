import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import FadiIn from "@/components/FadeIn/FadiIn";
import { Container } from "@/components/container/Container";
import Code from "@/components/code/Code";
import PulseFadeIn from "@/components/PulseFadeIn/PulseFadeIn";

export default function PulseFadeInP() {
  return (
    <section>
      <Container>
        <PageWrapper title="Pulse fade in">
          <PulseFadeIn />
        </PageWrapper>
        <Code
          code=".box:hover{
            animation: fade-in 500ms ease-in-out;
        }
        
        @keyframes fade-in {
            0%{
                transform: scale(0.9);
                opacity: 0;
              }
              50%{
                transform: scale(1.05);
                opacity: 0.6;
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
        }"
        />
      </Container>
    </section>
  );
}
