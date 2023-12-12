import React from "react";
import styles from "./page.module.css";

export default function Category({ params }) {
  return (
    <main className={styles.main}>
      <h1>{params.category}</h1>
    </main>
  );
}
