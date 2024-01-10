"use client";

import React from "react";
import styles from "./Menu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 4, title: "Blog", url: "/blog" },
  { id: 5, title: "About", url: "/about" },
  { id: 6, title: "Contact", url: "/contact" },
  //   { id: 6, title: "Dashboard", url: "/dashboard" },
];

export default function Menu() {
  const pathName = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          href={link.url}
          className={`${styles.eachLink} ${
            link.url == pathName && styles.active
          }`}
        >
          {link.title}
        </Link>
      ))}
    </>
  );
}
