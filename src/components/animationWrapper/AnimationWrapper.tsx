"use client";
import React from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.box__container}>
        {children}
        <span className={styles.artButtonAngleLeft} />
        <span className={styles.artButtonAngleRight} />
      </div>
      <Button onClick={handleClick}> {nameLink}</Button>
    </div>
  );
}
