import React from "react";
import styles from "./GalerryItem.module.css";
import Link from "next/link";
import Image from "next/image";

export default function GalerryItem({ href, title, src }) {
  return (
    <Link href={`/portfolio/${href}`} className={styles.item}>
      <span className={styles.spanTitle}>{title}</span>
      <div className={styles.imgCont}>
        <Image src={src} width={700} height={800} className={styles.img} />
      </div>
    </Link>
  );
}
