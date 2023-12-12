import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import IllustrationsImg from "public/illustration.png";
import WebsitesImg from "public/websites.png";
import AppsImg from "public/apps.jpg";

export default function Porfolio() {
  return (
    <main className={styles.main}>
      <h1>Choose a Galery</h1>
      <div className={styles.items}>
        <Link href={"/portfolio/illustrations"} className={styles.item}>
          <span className={styles.spanTitle}>Illustrations</span>
          <div className={styles.imgCont}>
            <Image
              src={IllustrationsImg}
              width={300}
              height={400}
              className={styles.img}
            />
          </div>
        </Link>
        <Link href={"/portfolio/websites"} className={styles.item}>
          <span className={styles.spanTitle}>Websites</span>
          <div className={styles.imgCont}>
            <Image
              src={WebsitesImg}
              width={300}
              height={400}
              className={styles.img}
            />
          </div>
        </Link>
        <Link href={"/portfolio/applications"} className={styles.item}>
          <span className={styles.spanTitle}>Applications</span>
          <div className={styles.imgCont}>
            <Image
              src={AppsImg}
              width={300}
              height={400}
              className={styles.img}
            />
          </div>
        </Link>
      </div>
    </main>
  );
}
