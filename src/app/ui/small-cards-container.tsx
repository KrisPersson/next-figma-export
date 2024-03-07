import styles from "./small-cards-container.module.css";
import Image from "next/image";

import { products } from "../products";

export default async function SmallCardsContainer() {
  return (
    <section className={styles.container}>
      {products.map((product, i) => {
        return (
          <article key={i} className={styles.smallCard}>
            <section className={styles.imageSection}>
              <Image
                src={product.productImgSrc}
                alt={`Image of product named ${product.name}`}
                width={241}
                height={135}
              ></Image>
            </section>
            <section className={styles.infoSection}></section>
          </article>
        );
      })}
    </section>
  );
}
