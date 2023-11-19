import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import { Container } from "@/components/container/Container";
import Code from "@/components/code/Code";
import { VercelLogoIcon } from "@radix-ui/react-icons";

export default function VerticalBounceP() {
  return (
    <section>
      <Container>
        <PageWrapper title="Vertical bounce">
          <VercelLogoIcon />
        </PageWrapper>
        <Code
          code=".box:hover{
            animation: fade-in 500ms ease-in-out;
        }
        @keyframes fade-in {
            0%, 100%{
                transform:translateY(0);
              }
              50% {
                transform: translateY(-20px);
              }
        }"
        />
      </Container>
    </section>
  );
}
