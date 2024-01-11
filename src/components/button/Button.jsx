import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

export default function Button({ href, title }) {
  return (
    <Link href={href}>
      <button className={styles.textBtn}>{title}</button>
    </Link>
  );
}
