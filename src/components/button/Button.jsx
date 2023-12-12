import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

export default function Button(props) {
  return (
      <button className={styles.textBtn}>{props.title}</button>
  );
}
