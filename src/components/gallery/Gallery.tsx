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
import SideInOut from "../SideInOut/SideInOut";
import SideInBottom from "../SideInBottom/SideInButtom";
import PulseFadeIn from "../PulseFadeIn/PulseFadeIn";
import SwingDropIn from "../SwingDropIn/SwingDropIn";
import SlideUpwithFade from "../SlideUpwithFade/SlideUpwithFade";
import Squeeze from "../Squeeze/Squeeze";
import VerticalBounce from "../VerticalBounce/VerticalBounce";
import RotationalWave from "../RotationalWave/RotationalWave";
import HorizontalVibration from "../HorizontalVibration/HorizontalVibration";
import BlurredFadeIn from "../BlurredFade-In/BlurredFadeIn";
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
          <AnimationWrapper nameLink={"fade in up"} href="/fade-in-up">
            <FadeInUp />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"fade in down"} href="/fade-in-down">
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
          <AnimationWrapper nameLink={"side in out"} href="/fade-out">
            <SideInOut />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"side in buttom"} href="/fade-out">
            <SideInBottom />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"Pulse fade in"} href="/fade-out">
            <PulseFadeIn />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"Swing Drop-In"} href="/fade-out">
            <SwingDropIn />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"Swing Drop-In"} href="/fade-out">
            <SlideUpwithFade />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"Squeeze"} href="/fade-out">
            <Squeeze />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"Vertical Bounce"} href="/fade-out">
            <VerticalBounce />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"Rotational Wave"} href="/fade-out">
            <RotationalWave />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"Horizontal Vibration"} href="/fade-out">
            <HorizontalVibration />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"Blurred Fade-In"} href="/fade-out">
            <BlurredFadeIn />
          </AnimationWrapper>
        </div>
      </Container>
    </section>
  );
}
