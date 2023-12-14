"use client"

import styles from "./page.module.css";
import Image from "next/image";
import Hero from "public/hero.png";
import Button from "../components/button/Button";
import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  const { lightMode } = useContext(ThemeContext);

  return (
    <main
      className={styles.container}
      style={
        lightMode == true
          ? { backgroundColor: "white" }
          : { backgroundColor: "black" }
      }
    >
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
          laboriosam reprehenderit saepe ullam, consectetur expedita.
        </p>
        <Button title={"See Out Works"} />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt={"heroImg"} className={styles.heroImg} />
      </div>
    </main>
  );
}
