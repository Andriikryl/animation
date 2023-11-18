"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import { TsHeading } from "../heading/Heading";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <motion.div
          className={styles.hero__box}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <TsHeading headingLevel="h1">CSS animation gallery</TsHeading>
          <DescriptionBlock>
            A curated collection of animations crafted exclusively with CSS.
            Ready to integrate with a simple copy-paste.
          </DescriptionBlock>
        </motion.div>
      </Container>
    </section>
  );
}
