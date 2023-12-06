import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span>@ All rights deserved</span>
      <div className={styles.socialNetworks}>
        <Link href="https://www.facebook.com" target="_blank">
          <Image
            src={"/1.png"}
            width={20}
            height={20}
            alt={"facebooks"}
            className={styles.icon}
          />
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
          <Image
            src={"/2.png"}
            width={20}
            height={20}
            alt={"instagram"}
            className={styles.icon}
          />
        </Link>
        <Link href="https://www.twitter.com" target="_blank">
          <Image
            src={"/3.png"}
            width={20}
            height={20}
            alt={"x"}
            className={styles.icon}
          />
        </Link>
        <Link href="https://www.youtube.com" target="_blank">
          <Image
            src={"/4.png"}
            width={20}
            height={20}
            alt={"youtube"}
            className={styles.icon}
          />
        </Link>
      </div>
    </div>
  );
}
