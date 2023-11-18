import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import FadiIn from "@/components/FadeIn/FadiIn";
import { Container } from "@/components/container/Container";
import Code from "@/components/code/Code";

export default function VerticalWave() {
  return (
    <section>
      <Container>
        <PageWrapper title="Rotation wave">
          <FadiIn />
        </PageWrapper>
        <Code
          code=".box:hover{
            animation: fade-in 2s ease-in-out infinite;
        }
        
        @keyframes fade-in {
            0%{
                transform:rotate(0deg);
              }
              25% {
                transform: rotate(10deg);
              }
              50% {
                transform: rotate(-10deg);
              }
              75% {
                transform: rotate(10deg);
              }
              100% {
                transform: rotate(0deg);
              }
        }"
        />
      </Container>
    </section>
  );
}
