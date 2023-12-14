"use client";

import React, { useContext, useState } from "react";
import styles from "./DarkModeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

export default function DarkModeToggler() {
  const { toggle, lightMode } = useContext(ThemeContext);
  return (
    <div>
      <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div
          className={styles.ball}
          style={lightMode == true ? { left: "2px" } : { right: "2px" }}
        />
      </div>
    </div>
  );
}
