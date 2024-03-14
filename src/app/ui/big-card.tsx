import styles from "./big-card.module.scss";
import ShopNowButton from "./shop-now-button";

export default async function BigCard() {
  return (
    <article className={styles.bigCard}>
      <section className={styles.imgSection}></section>
      <section className={styles.infoSection}>
        <h3 className={styles.typeTitle}>Free & Strong</h3>
        <h2 className={styles.nameTitle}>002 Jong Song Peak</h2>
        <h2 className={styles.nameTitle}>995 SEK</h2>
        <ShopNowButton />
      </section>
    </article>
  );
}
