import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import { Container } from "@/components/container/Container";
import Code from "@/components/code/Code";
import { VercelLogoIcon } from "@radix-ui/react-icons";
import Tada from "@/components/Tada/Tada";

export default function TadaP() {
  return (
    <section>
      <Container>
        <PageWrapper title="Tada">
          <Tada />
        </PageWrapper>
        <Code
          code=".box:hover{
            animation: fade-in 1s ease-in-out;
        }
        
        @keyframes fade-in {
          0%{
            transform: scale(1)
          }
          10% {
            transform: scale(0.9) rotate(-3deg)
          }
          20% {
            transform: scale(0.9) rotate(-3deg)
          }
          30% {
            transform: scale(1.1) rotate(3deg)
          }
          40% {
            transform: scale(1.1) rotate(-3deg)
          }
          50% {
            transform: scale(1.1) rotate(3deg)
          }
          60% {
            transform: scale(1.1) rotate(-3deg)
          }
          70% {
            transform: scale(1.1) rotate(3deg)
          }
          80% {
            transform: scale(1.1) rotate(-3deg)
          }
          90% {
            transform: scale(1.1) rotate(3deg)
          }
          100%{
            transform: scale(1) rotate(0)
          }
        }
        "
        />
      </Container>
    </section>
  );
}
