"use client";

import { React, useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function BlogPost({ params }) {
  const [blogItem, setBlogItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`)
      .then((response) => response.json())
      .then((result) => setBlogItem(result));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Distinctio, sunt.
          </p>
          <div className={styles.author}>
            <Image
              src={
                "https://images.pexels.com/photos/19329504/pexels-photo-19329504/free-photo-of-black-and-white-photo-of-a-mountain-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Test Testidze</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/19329504/pexels-photo-19329504/free-photo-of-black-and-white-photo-of-a-mountain-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
