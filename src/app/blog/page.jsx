import React from "react";
import styles from "./page.module.css";
import BlogPost from "@/components/blogPost/BlogPost";

export const metadata = {
  title: "Blog",
  description: "Generated by create next app",
};

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cashe: "force-cache",
  });
  if (!res.ok) {
    throw new Error("No data");
  }

  return res.json();
};

export default async function Blog() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <h1
        style={{
          width: "100%",
          fontSize: "72px",
        }}
      >
        Blogs
      </h1>
      {data.map((item) => {
        return (
          <BlogPost
            key={item.id}
            title={
              item.title.split("")[0].toUpperCase() +
              item.title.slice(1, item.title.length)
            }
            desc={item.body}
            src={
              "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            id={item.id}
          />
        );
      })}
    </main>
  );
}
