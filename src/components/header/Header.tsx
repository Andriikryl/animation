"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from "../container/Container";
import styles from "./style.module.css";
import Link from "next/link";
import Bord from "../bord/Bord";

export default function Header() {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.8 }}
    >
      <Container>
        <div className={styles.header__box}>
          <nav className={styles.nav}>
            <ul role="list" className={styles.list}>
              <motion.li className={styles.list__item}>
                <Link href={"/"} className={styles.item__link}>
                  Home
                </Link>
              </motion.li>
            </ul>
          </nav>
        </div>
        <Bord />
      </Container>
    </motion.header>
  );
}
