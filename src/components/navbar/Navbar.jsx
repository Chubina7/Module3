import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import DarkModeToggler from "../darkModeToggler/DarkModeToggler";
import Menu from "./menu/Menu";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Lamamia
      </Link>
      <div className={styles.links}>
        <DarkModeToggler />
        <Menu />
        <button className={styles.logOutBtn}>Log Out</button>
      </div>
    </div>
  );
}
