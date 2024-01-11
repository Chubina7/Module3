"use client";

import React from "react";
import styles from "./CategoryItem.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CategoryItem({ description, title, href }) {
  const pathName = usePathname();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.desc}>{description}</p>
        <Button title="See More" href={`${pathName}/${href}`} />
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={
            "https://images.pexels.com/photos/19287812/pexels-photo-19287812/free-photo-of-black-and-white-photo-of-a-cow-laying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt={title}
          width={1000}
          height={1000}
          className={styles.img}
        />
      </div>
    </div>
  );
}
