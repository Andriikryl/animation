import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import FadiIn from "@/components/FadeIn/FadiIn";
import { Container } from "@/components/container/Container";
import Code from "@/components/code/Code";

export default function Squeeze() {
  return (
    <section>
      <Container>
        <PageWrapper title="Squeeze">
          <FadiIn />
        </PageWrapper>
        <Code
          code=".box:hover{
            animation: fade-in 500ms ease-in-out;
        }
        
        @keyframes fade-in {
            0%, 100%{
                transform:scale(1, 1);
              }
              50% {
                transform: scale(1.1, 0.9);
              }
        }"
        />
      </Container>
    </section>
  );
}
