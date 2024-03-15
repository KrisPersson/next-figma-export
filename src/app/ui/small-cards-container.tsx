import styles from "./small-cards-container.module.scss";
import Image from "next/image";
import Link from "next/link";

import { products } from "../products";

export default async function SmallCardsContainer() {
  return (
    <section className={styles.productSection}>
      <div className={styles.container}>
        {products.map((product, i) => {
          return (
            <article key={i} className={styles.smallCard}>
              <section className={styles.imageSection}>
                <Image
                  src={product.productImgSrc}
                  alt={`Image of product named ${product.name}`}
                  fill={true}
                  className={styles.productImg}
                ></Image>
              </section>
              <section className={styles.infoSection}>
                <h3 className={styles.typeTitle}>{product.type}</h3>
                <h2 className={styles.nameTitle}>{product.name}</h2>
                <Image
                  src={product.featureDotImgSrc}
                  className={styles.circles}
                  width={126}
                  height={16}
                  alt="Product features"
                ></Image>
                <Link className={styles.shopNow} href="/">
                  Shop now
                </Link>
              </section>
            </article>
          );
        })}
      </div>
    </section>
  );
}
