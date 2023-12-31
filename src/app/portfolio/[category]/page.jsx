import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

export default function Category({ params }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainHeading}>{params.category}</h1>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
            doloribus? Eveniet similique voluptatem culpa delectus nobis
            molestiae quam ipsa quos! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quos laudantium nobis ratione unde, fugit autem
            consequatur sequi eligendi reiciendis inventore nihil rerum sed
            harum numquam deserunt obcaecati dolore exercitationem? Temporibus.
          </p>
          <Button title="See More" url={"/"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/19287812/pexels-photo-19287812/free-photo-of-black-and-white-photo-of-a-cow-laying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="top"
            width={100}
            height={100}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
            doloribus? Eveniet similique voluptatem culpa delectus nobis
            molestiae quam ipsa quos! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quos laudantium nobis ratione unde, fugit autem
            consequatur sequi eligendi reiciendis inventore nihil rerum sed
            harum numquam deserunt obcaecati dolore exercitationem? Temporibus.
          </p>
          <Button title="See More" url={"/"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/19287812/pexels-photo-19287812/free-photo-of-black-and-white-photo-of-a-cow-laying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="top"
            width={100}
            height={100}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
            doloribus? Eveniet similique voluptatem culpa delectus nobis
            molestiae quam ipsa quos! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quos laudantium nobis ratione unde, fugit autem
            consequatur sequi eligendi reiciendis inventore nihil rerum sed
            harum numquam deserunt obcaecati dolore exercitationem? Temporibus.
          </p>
          <Button title="See More" url={"/"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/19287812/pexels-photo-19287812/free-photo-of-black-and-white-photo-of-a-cow-laying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="top"
            width={100}
            height={100}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
            doloribus? Eveniet similique voluptatem culpa delectus nobis
            molestiae quam ipsa quos! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quos laudantium nobis ratione unde, fugit autem
            consequatur sequi eligendi reiciendis inventore nihil rerum sed
            harum numquam deserunt obcaecati dolore exercitationem? Temporibus.
          </p>
          <Button title="See More" url={"/"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/19287812/pexels-photo-19287812/free-photo-of-black-and-white-photo-of-a-cow-laying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="top"
            width={100}
            height={100}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
            doloribus? Eveniet similique voluptatem culpa delectus nobis
            molestiae quam ipsa quos! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quos laudantium nobis ratione unde, fugit autem
            consequatur sequi eligendi reiciendis inventore nihil rerum sed
            harum numquam deserunt obcaecati dolore exercitationem? Temporibus.
          </p>
          <Button title="See More" url={"/"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/19287812/pexels-photo-19287812/free-photo-of-black-and-white-photo-of-a-cow-laying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="top"
            width={100}
            height={100}
            className={styles.img}
          />
        </div>
      </div>
    </main>
  );
}
