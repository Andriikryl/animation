import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import FadiIn from "@/components/FadeIn/FadiIn";
import { Container } from "@/components/container/Container";
import Code from "@/components/code/Code";
import FadeOutUp from "@/components/FadeInOutUp/FadeOutUp";

export default function FadeOutUpP() {
  return (
    <section>
      <Container>
        <PageWrapper title="Fade out up">
          <FadeOutUp />
        </PageWrapper>
        <Code
          code=".box:hover{
            animation: fade-in 500ms ease-in-out;
        }
        
        @keyframes fade-in {
            0%{
                opacity: 1;
                transform: translateY(0);
              }
              100% {
                opacity: 0;
                transform: translateY(-20px);
              }
        }"
        />
      </Container>
    </section>
  );
}
