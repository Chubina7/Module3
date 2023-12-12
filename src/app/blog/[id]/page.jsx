import React from "react";
import styles from "./page.module.css";

export default function BlogPost(props) {
  return (
    <main className={styles.main}>
      <h1>Blog Number {props.params.id}</h1>
    </main>
  );
}
