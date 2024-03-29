import styles from "./big-card.module.scss";
import ShopNowButton from "./shop-now-button";
import Image from "next/image";

export default async function BigCard() {
  return (
    <article className={styles.bigCard} aria-label="Product card">
      <div className={styles.imgSection}>
        <Image
          src="/portrait.png"
          fill
          className={styles.image}
          sizes="100vw"
          alt={`Image of product named '002 Jong Song Peak'`}
        />
      </div>
      <div className={styles.infoSection}>
        <div className={styles.textContainer}>
          <div className={styles.typeTitle}>Free & Strong</div>
          <div className={styles.nameTitle}>
            002 Jong Song Peak
            <br /> 995 SEK
          </div>
        </div>
        <ShopNowButton />
      </div>
    </article>
  );
}
