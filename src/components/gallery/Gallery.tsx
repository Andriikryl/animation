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
          <AnimationWrapper nameLink={"fade in left"} href="/fade-in-left">
            <FadeInLeft />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"fade in right"} href="/fade-in-right">
            <FadeInRigh />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"fade out up"} href="/fade-out-up">
            <FadeOutUp />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"fade out down"} href="/fade-out-down">
            <FadeOutDown />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"fade out left"} href="/fade-out-left">
            <FadeOutLeft />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"fade out right"} href="/fade-out-right">
            <FadeOutRight />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"side in out"} href="/side-in-out">
            <SideInOut />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"side in buttom"} href="/side-in-buttom">
            <SideInBottom />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"Pulse fade in"} href="/pulse-fade-in">
            <PulseFadeIn />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"Swing Drop-In"} href="/swing-drop-in">
            <SwingDropIn />
          </AnimationWrapper>
          <AnimationWrapper
            nameLink={"Slide up with fade"}
            href="/slide-up-with-fade"
          >
            <SlideUpwithFade />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"Squeeze"} href="/squeeze">
            <Squeeze />
          </AnimationWrapper>
          <AnimationWrapper
            nameLink={"Vertical Bounce"}
            href="/vertical-bounce"
          >
            <VerticalBounce />
          </AnimationWrapper>
          <AnimationWrapper nameLink={"Rotational Wave"} href="/rotation-wave">
            <RotationalWave />
          </AnimationWrapper>
          <AnimationWrapper
            nameLink={"Horizontal Vibration"}
            href="/horizontal-vibration"
          >
            <HorizontalVibration />
          </AnimationWrapper>
          <AnimationWrapper
            nameLink={"Blurred Fade-In"}
            href="/blurred-fade-in"
          >
            <BlurredFadeIn />
          </AnimationWrapper>
        </div>
      </Container>
    </section>
  );
}
