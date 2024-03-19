import styles from "./hero.module.scss";
import Image from "next/image";
import ShopNowButton from "./shop-now-button";
import { convertPxToRem } from "../utils/index";

export default async function Hero() {
  return (
    <section aria-label="hero" className={styles.hero}>
      <picture>
        <source srcSet="hero.png" media="(min-width: 475px)" />
        <img src="hero-mobile.png" alt="Hero image" className={styles.image} />
      </picture>

      <div className={styles.hero__content}>
        <div className={styles.hero__textContainer}>
          <div className={styles.productTitle}>001 Treriksröset</div>
          <div className={styles.productSubTitle}>Tech & Soul</div>
        </div>
        <ShopNowButton />
      </div>
    </section>
  );
}
