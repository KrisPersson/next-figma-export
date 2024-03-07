"use client";

import Link from "next/link";
import { navLinks } from "./header";
import styles from "./header.module.css";

export default async function HamburgerMenu() {
  return (
    <nav className={styles.header__desktopNav}>
      <ul className={styles.header__desktopNav}>
        {navLinks.map((link, i) => {
          return (
            <li key={i}>
              <Link className={styles.header__navLink} href={link.href}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
