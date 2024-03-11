import styles from "./hero.module.css";
import ShopNowButton from "./shop-now-button";

export default async function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.productTitle}>001 Treriksröset</p>
      <p className={styles.productSubTitle}>Tech & Soul</p>
      <ShopNowButton />
    </section>
  );
}
