import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./BlogPost.module.css";

export default function BlogPost(props) {
  return (
    <Link href={`/blog/${props.id}`} className={styles.container}>
      <div className={styles.imgCont}>
        <Image
          alt="blogPost"
          width={300}
          height={200}
          src={props.src}
          className={styles.img}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.desc}>{props.desc}</p>
      </div>
    </Link>
  );
}
