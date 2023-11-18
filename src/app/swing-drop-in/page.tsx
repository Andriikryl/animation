import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import FadiIn from "@/components/FadeIn/FadiIn";
import { Container } from "@/components/container/Container";
import Code from "@/components/code/Code";

export default function SwingDropIn() {
  return (
    <section>
      <Container>
        <PageWrapper title="Swing drop in">
          <FadiIn />
        </PageWrapper>
        <Code
          code=".box:hover{
            animation: fade-in 500ms ease-in-out;
        }
        
        @keyframes fade-in {
            0%{
                transform: rotate(-30deg) translateY(-50px);
                opacity: 0;
              }
              100% {
                transform: rotate(0deg) translateY(0);
                opacity: 1;
              }
        }"
        />
      </Container>
    </section>
  );
}
