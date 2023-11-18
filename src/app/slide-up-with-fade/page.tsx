import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import FadiIn from "@/components/FadeIn/FadiIn";
import { Container } from "@/components/container/Container";
import Code from "@/components/code/Code";

export default function SlideUp() {
  return (
    <section>
      <Container>
        <PageWrapper title="Slide up with fade">
          <FadiIn />
        </PageWrapper>
        <Code
          code=".box:hover{
            animation: fade-in 500ms ease-in-out;
        }
        
        @keyframes fade-in {
            0%{
              opacity: 0;
                transform: translateY(50px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
        }"
        />
      </Container>
    </section>
  );
}
