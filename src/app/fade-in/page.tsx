import React from "react";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import FadiIn from "@/components/FadeIn/FadiIn";
import { Container } from "@/components/container/Container";

export default function Fadein() {
  return (
    <section>
      <Container>
        <PageWrapper title="Fade in">
          <FadiIn />
        </PageWrapper>
      </Container>
    </section>
  );
}
