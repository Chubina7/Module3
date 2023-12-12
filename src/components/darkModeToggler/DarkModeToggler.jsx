"use client";

import React from "react";
import styles from "./DarkModeToggle.module.css";

export default function DarkModeToggler() {
  return (
    <div>
      <div
        className={styles.container}
        onClick={() => {
          console.log("hello");
        }}
      >
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div className={styles.ball} />
      </div>
    </div>
  );
}
