import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import FadiIn from "@/components/FadeIn/FadiIn";
import { Container } from "@/components/container/Container";
import Code from "@/components/code/Code";

export default function FadeOut() {
  return (
    <section>
      <Container>
        <PageWrapper title="Fade out">
          <FadiIn />
        </PageWrapper>
        <Code
          code="
          .box:hover{
              animation: fade-in 500ms ease-in-out;
          }
          @keyframes fade-in {
              0%{
                  opacity: 1;
                }
                100% {
                  opacity: 0;
                }
          }"
        />
      </Container>
    </section>
  );
}
