import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import FadiIn from "@/components/FadeIn/FadiIn";
import { Container } from "@/components/container/Container";
import Code from "@/components/code/Code";

export default function FadeOutLeft() {
  return (
    <section>
      <Container>
        <PageWrapper title="Fade out Left">
          <FadiIn />
        </PageWrapper>
        <Code
          code=".box:hover{
            animation: fade-in 500ms ease-in-out;
        }
        
        @keyframes fade-in {
            0%{
                opacity: 1;
                transform: translateX(0);
              }
              100% {
                opacity: 0;
                transform: translateX(-20px);
              }
        }"
        />
      </Container>
    </section>
  );
}
