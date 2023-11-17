import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import { TsHeading } from "../heading/Heading";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero__box}>
          <TsHeading headingLevel="h1">CSS animation gallery</TsHeading>
          <DescriptionBlock>
            A curated collection of animations crafted exclusively with CSS.
            Ready to integrate with a simple copy-paste.
          </DescriptionBlock>
        </div>
      </Container>
    </section>
  );
}
