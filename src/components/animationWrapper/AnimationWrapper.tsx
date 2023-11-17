import React from "react";
import Link from "next/link";
import styles from "./style.module.css";
import { Button } from "../button/Button";

interface AnimationWrapperProps {
  children: React.ReactNode;
  nameLink: string;
  href: string;
}

export default function AnimationWrapper({
  children,
  nameLink,
  href,
}: AnimationWrapperProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box__container}>{children}</div>
      <Button> {nameLink}</Button>
    </div>
  );
}
