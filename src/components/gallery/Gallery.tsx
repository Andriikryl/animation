import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import AnimationWrapper from "../animationWrapper/AnimationWrapper";
import FadiIn from "../FadeIn/FadiIn";
export default function Gallery() {
  return (
    <section>
      <Container>
        <div>
          <AnimationWrapper nameLink={"fade in"} href="/fade-in">
            <FadiIn />
          </AnimationWrapper>
        </div>
      </Container>
    </section>
  );
}
