import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import FadiIn from "@/components/FadeIn/FadiIn";
import { Container } from "@/components/container/Container";
import Code from "@/components/code/Code";

export default function HorizontalVibrations() {
  return (
    <section>
      <Container>
        <PageWrapper title="Horizontal vibarotions">
          <FadiIn />
        </PageWrapper>
        <Code
          code=".box:hover{
            animation: fade-in 0.3s linear infinite;
        }
        
        @keyframes fade-in {
            0%{
                transform:translateX(0);
              }
              25% {
                transform: translateX(5px);
              }
              50% {
                transform: translateX(-5px);
              }
              75% {
                transform: translateX(5px);
              }
              100% {
                transform: translateX(0);
              }
        }"
        />
      </Container>
    </section>
  );
}
