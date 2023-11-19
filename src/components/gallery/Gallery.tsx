"use client";
import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import { motion } from "framer-motion";
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
import RubberBand from "../RubberBand/RubberBand";
import Tada from "../Tada/Tada";

const animationComponents = [
  { name: "fade in", component: <FadiIn />, href: "/fade-in" },
  { name: "fade out", component: <FadeOut />, href: "/fade-out" },
  { name: "fade in up", component: <FadeInUp />, href: "/fade-in-up" },
  { name: "fade in down", component: <FadeInDown />, href: "/fade-in-down" },
  { name: "fade in left", component: <FadeInLeft />, href: "/fade-in-left" },
  { name: "fade in right", component: <FadeInRigh />, href: "/fade-in-right" },
  { name: "fade out up", component: <FadeOutUp />, href: "/fade-out-up" },
  { name: "fade out down", component: <FadeOutDown />, href: "/fade-out-down" },
  { name: "fade out left", component: <FadeOutLeft />, href: "/fade-out-left" },
  {
    name: "fade out right",
    component: <FadeOutRight />,
    href: "/fade-out-right",
  },
  { name: "side in out", component: <SideInOut />, href: "/side-in-out" },
  {
    name: "side in bottom",
    component: <SideInBottom />,
    href: "/side-in-bottom",
  },
  { name: "pulse fade in", component: <PulseFadeIn />, href: "/pulse-fade-in" },
  { name: "swing drop in", component: <SwingDropIn />, href: "/swing-drop-in" },
  {
    name: "slide up with fade",
    component: <SlideUpwithFade />,
    href: "/slide-up-with-fade",
  },
  { name: "squeeze", component: <Squeeze />, href: "/squeeze" },
  {
    name: "vertical bounce",
    component: <VerticalBounce />,
    href: "/vertical-bounce",
  },
  {
    name: "rotational wave",
    component: <RotationalWave />,
    href: "/rotation-wave",
  },
  {
    name: "horizontal vibration",
    component: <HorizontalVibration />,
    href: "/horizontal-vibration",
  },
  {
    name: "blurred fade-in",
    component: <BlurredFadeIn />,
    href: "/blurred-fade-in",
  },
  {
    name: "Rubber Band",
    component: <RubberBand />,
    href: "/rubber-band",
  },
  {
    name: "Tada",
    component: <Tada />,
    href: "/tada",
  },
];

const XAnimations = {
  hidden: { opacity: 0, x: 400 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2, duration: 0.8 },
  }),
};

export default function Gallery() {
  return (
    <motion.section
      className={styles.gallery}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <Container>
        <motion.div className={styles.gallery__box}>
          {animationComponents.map((animation, index) => (
            <motion.div key={index} variants={XAnimations} custom={index}>
              <AnimationWrapper nameLink={animation.name} href={animation.href}>
                {animation.component}
              </AnimationWrapper>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
