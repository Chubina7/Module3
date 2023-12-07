import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <main className={styles.main}>
      <Link href={"/blog/1"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/19329504/pexels-photo-19329504/free-photo-of-black-and-white-photo-of-a-mountain-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="alt"
            width={400}
            height={200}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis doloremque voluptas nesciunt quod at impedit beatae
            sapiente! Ipsam impedit incidunt numquam dignissimos autem inventore
            necessitatibus esse, neque deserunt fugiat nobis veniam quis iure
            sint illum quibusdam saepe. Perferendis totam ipsa ratione adipisci
            quam expedita necessitatibus tempore, hic deleniti facilis minus
            explicabo dolorem error a reprehenderit modi est tempora cumque.
            Blanditiis, eveniet amet quod quos similique minima neque iste
            magnam, veniam ea explicabo. Voluptatem quidem repellendus ipsum
            necessitatibus optio. Minima, deleniti error? Itaque deserunt optio
            nobis dolorum nostrum voluptas excepturi quos, dolore nisi! Facere
            minima hic velit iusto recusandae tempore ullam?
          </p>
        </div>
      </Link>
      <Link href={"/blog/2"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/19329504/pexels-photo-19329504/free-photo-of-black-and-white-photo-of-a-mountain-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="alt"
            width={400}
            height={200}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis doloremque voluptas nesciunt quod at impedit beatae
            sapiente! Ipsam impedit incidunt numquam dignissimos autem inventore
            necessitatibus esse, neque deserunt fugiat nobis veniam quis iure
            sint illum quibusdam saepe. Perferendis totam ipsa ratione adipisci
            quam expedita necessitatibus tempore, hic deleniti facilis minus
            explicabo dolorem error a reprehenderit modi est tempora cumque.
            Blanditiis, eveniet amet quod quos similique minima neque iste
            magnam, veniam ea explicabo. Voluptatem quidem repellendus ipsum
            necessitatibus optio. Minima, deleniti error? Itaque deserunt optio
            nobis dolorum nostrum voluptas excepturi quos, dolore nisi! Facere
            minima hic velit iusto recusandae tempore ullam?
          </p>
        </div>
      </Link>
      <Link href={"/blog/3"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/19329504/pexels-photo-19329504/free-photo-of-black-and-white-photo-of-a-mountain-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="alt"
            width={400}
            height={200}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis doloremque voluptas nesciunt quod at impedit beatae
            sapiente! Ipsam impedit incidunt numquam dignissimos autem inventore
            necessitatibus esse, neque deserunt fugiat nobis veniam quis iure
            sint illum quibusdam saepe. Perferendis totam ipsa ratione adipisci
            quam expedita necessitatibus tempore, hic deleniti facilis minus
            explicabo dolorem error a reprehenderit modi est tempora cumque.
            Blanditiis, eveniet amet quod quos similique minima neque iste
            magnam, veniam ea explicabo. Voluptatem quidem repellendus ipsum
            necessitatibus optio. Minima, deleniti error? Itaque deserunt optio
            nobis dolorum nostrum voluptas excepturi quos, dolore nisi! Facere
            minima hic velit iusto recusandae tempore ullam?
          </p>
        </div>
      </Link>
    </main>
  );
}
