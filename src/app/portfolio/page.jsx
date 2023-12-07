import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Porfolio() {
  return (
    <main className={styles.main}>
      <h1>Choose a Galery</h1>
      <div className={styles.items}>
        <Link href={"/portfolio/ilustrations"} className={styles.item}>
          <span className={styles.spanTitle}>Ilustrations</span>
        </Link>
        <Link href={"/portfolio/Websites"} className={styles.item}>
          <span className={styles.spanTitle}>Websites</span>
        </Link>
        <Link href={"/portfolio/Aplications"} className={styles.item}>
          <span className={styles.spanTitle}>Aplications</span>
        </Link>
      </div>
    </main>
  );
}
