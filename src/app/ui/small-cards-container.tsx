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
              <div
                aria-label="Product card image-container"
                className={styles.imageSection}
              >
                <Image
                  src={product.productImgSrc}
                  alt={`Image of product named ${product.name}`}
                  fill={true}
                  className={styles.productImg}
                ></Image>
              </div>
              <div
                aria-label="Product card info-container"
                className={styles.infoSection}
              >
                <div className={styles.textContainer}>
                  <div className={styles.typeTitle}>{product.type}</div>
                  <div className={styles.nameTitle}>{product.name}</div>
                  <Image
                    src={product.featureDotImgSrc}
                    className={styles.circles}
                    width={126}
                    height={16}
                    alt="Product features"
                  />
                </div>
                <Link className={styles.shopNow} href="/">
                  Shop now
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
