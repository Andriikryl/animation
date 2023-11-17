import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import AnimationWrapper from "../animationWrapper/AnimationWrapper";
import FadiIn from "../FadeIn/FadiIn";
import FadeOut from "../FadeOut/FadeOut";
import FadeInUp from "../FadeInUp/FadeInUp";
import FadeInDown from "../FadeInDown/FadeInDown";
import FadeInLeft from "../FadeInLeft/FadeInLeft";
import FadeInRigh from "../FadeInRight/FadeInRight";
import FadeOutUp from "../FadeInOutUp/FadeOutUp";
import FadeOutDown from "../FadeInOutDown/FadeOutDown";
import FadeOutLeft from "../FadeInOutLeft/FadeOutLeft";
import FadeOutRight from "../FadeInOutRight/FadeOutRight";
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
          <AnimationWrapper nameLink={"fade in up"} href="/fade-out">
            <FadeInUp />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"fade in down"} href="/fade-out">
            <FadeInDown />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"fade in left"} href="/fade-out">
            <FadeInLeft />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"fade in right"} href="/fade-out">
            <FadeInRigh />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"fade out up"} href="/fade-out">
            <FadeOutUp />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"fade out down"} href="/fade-out">
            <FadeOutDown />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"fade out left"} href="/fade-out">
            <FadeOutLeft />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"fade out right"} href="/fade-out">
            <FadeOutRight />
          </AnimationWrapper>
        </div>
      </Container>
    </section>
  );
}
