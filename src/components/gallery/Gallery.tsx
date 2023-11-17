import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import AnimationWrapper from "../animationWrapper/AnimationWrapper";
import FadiIn from "../FadeIn/FadiIn";
import FadeOut from "../FadeOut/FadeOut";
export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <Container>
        <div className={styles.gallery__box}>
          <AnimationWrapper nameLink={"fade in"} href="/fade-in">
            <FadiIn />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"fade out"} href="/fade-out">
            <FadeOut />
          </AnimationWrapper>
        </div>
      </Container>
    </section>
  );
}
