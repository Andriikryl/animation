import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import { Container } from "@/components/container/Container";
import Code from "@/components/code/Code";
import RubberBand from "@/components/RubberBand/RubberBand";

export default function RubberBandP() {
  return (
    <section>
      <Container>
        <PageWrapper title="Rubber band">
          <RubberBand />
        </PageWrapper>
        <Code
          code=".box:hover{
            animation: fade-in 1s ease-in-out;
        }
        
        @keyframes fade-in {
            0%{
                transform:  scale(1);
              }
              30%{
                transform:  scale(1.25);
              }
              40%{
                transform:  scale(0.75);
              }
              50%{
                transform:  scale(1.15);
              }
              65%{
                transform:  scale(0.95);
              }
              75% {
                transform: scale(1.05);
              }
              100% {
                transform: scale(1);
              }
        }"
        />
      </Container>
    </section>
  );
}
