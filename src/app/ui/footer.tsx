import styles from "./footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          <Image
            className={styles.logo}
            src="/tripoint-symbol.svg"
            width={29.3}
            height={22.67}
            alt="Tripoint Symbol"
          />
          <Image
            className={styles.logo}
            src="/tripoint_logo.svg"
            width={84}
            height={23.54}
            alt="Tripoint text-logo"
          />
        </div>
        <p className={styles.copyrightText}>© 2023 Tripoint AB</p>
      </div>
    </footer>
  );
}
