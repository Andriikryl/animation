import React from "react";
import { Container } from "../container/Container";
import styles from "./style.module.css";
import Link from "next/link";
import Bord from "../bord/Bord";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__box}>
          <nav className={styles.nav}>
            <ul role="list" className={styles.list}>
              <li className={styles.list__item}>
                <Link href={"/"} className={styles.item__link}>
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Bord />
      </Container>
    </header>
  );
}
