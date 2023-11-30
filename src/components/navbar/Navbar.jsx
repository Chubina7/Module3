import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Portfolio", url: "/portfolio" },
    { id: 4, title: "Blog", url: "/blog" },
    { id: 5, title: "About", url: "/about" },
    { id: 6, title: "Contact", url: "/contact" },
    { id: 6, title: "Dashboard", url: "/dashboard" },
  ];

  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>Lamamia</Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link href={link.url} className={styles.eachLink}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logOutBtn}>Log Out</button>
      </div>
    </div>
  );
}