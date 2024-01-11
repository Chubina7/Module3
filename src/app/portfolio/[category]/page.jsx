import React from "react";
import styles from "./page.module.css";
import CategoryItem from "../components/categoryItem/CategoryItem";

const categoryItems = [
  {
    id: "1",
    title: "Lorem Ipsumnus",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, neque.",
  },
  {
    id: "2",
    title: "Some dummy Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, neque.",
  },
  {
    id: "3",
    title: "Dumber Title",
    description:
      "Dumber description using lorem: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, neque.",
  },
  {
    id: "4",
    title: "Oh, my title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, neque.",
  },
];

export async function generateMetadata({ params }) {
  const title = params.category;
  return {
    title: title,
  };
}

export default function Category({ params }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainHeading}>{params.category}</h1>
      {categoryItems.map((item) => {
        return (
          <CategoryItem
            title={item.title}
            description={item.description}
            key={item.id}
            href={item.id}
          />
        );
      })}
    </main>
  );
}
