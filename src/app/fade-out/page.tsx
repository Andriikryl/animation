import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import FadiIn from "@/components/FadeIn/FadiIn";
import { Container } from "@/components/container/Container";
import Code from "@/components/code/Code";
import FadeOut from "@/components/FadeOut/FadeOut";

export default function FadeOutP() {
  return (
    <section>
      <Container>
        <PageWrapper title="Fade out">
          <FadeOut />
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
