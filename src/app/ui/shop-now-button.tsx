import styles from "./shop-now-button.module.scss";
import { archia } from "../fonts";

export default async function ShopNowButton() {
  return (
    <button className={`${styles.button} ${archia.className} antialiased`}>
      Shop now
    </button>
  );
}
