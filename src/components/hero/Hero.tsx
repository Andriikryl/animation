import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import { TsHeading } from "../heading/Heading";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero__box}>
          <TsHeading headingLevel="h1">CSS animation gallery</TsHeading>
        </div>
      </Container>
    </section>
  );
}
