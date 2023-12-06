import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import ContactImg from "public/contact.png";

export default function Contact() {
  console.log("hello");
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Lets Keep In Touch</h1>
      <div className={styles.container}>
        <div className={styles.imageCont}>
          <Image src={ContactImg} className={styles.img} />
        </div>
        <form className={styles.formCont}>
          <div className={styles.inputs}>
            <input className={styles.name} type="text" placeholder="name" />
            <input className={styles.email} type="text" placeholder="email" />
            <textarea className={styles.message} placeholder="message"></textarea>
          </div>
          <div className={styles.submitCont}>
            <Button title="Send" />
          </div>
        </form>
      </div>
    </main>
  );
}