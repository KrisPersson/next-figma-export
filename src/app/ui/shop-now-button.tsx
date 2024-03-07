import styles from "./shop-now-button.module.css";
import { archia } from "../fonts";

export default async function ShopNowButton() {
  return (
    <button className={`${styles.button} ${archia.className} antialiased`}>
      Shop Now
    </button>
  );
}
