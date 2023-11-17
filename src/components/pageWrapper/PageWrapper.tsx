import React from "react";
import styles from "./style.module.css";
import { TsHeading } from "../heading/Heading";
interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function PageWrapper({ title, children }: PageWrapperProps) {
  return (
    <div>
      <TsHeading headingLevel="h3">{title}</TsHeading>
      <div className={styles.box__container}>
        {children}
        <span className={styles.artButtonAngleLeft} />
        <span className={styles.artButtonAngleRight} />
      </div>
    </div>
  );
}
