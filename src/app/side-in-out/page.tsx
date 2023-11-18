import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import FadiIn from "@/components/FadeIn/FadiIn";
import { Container } from "@/components/container/Container";
import Code from "@/components/code/Code";

export default function SideInOut() {
  return (
    <section>
      <Container>
        <PageWrapper title="Side in out">
          <FadiIn />
        </PageWrapper>
        <Code
          code=".box:hover{
            animation: fade-in 500ms ease-in-out;
        }
        
        @keyframes fade-in {
            0%{
                transform: translateY(-20px);
              }
              100% {
                transform: translateY(0);
              }
        }"
        />
      </Container>
    </section>
  );
}
