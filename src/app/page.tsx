import Image from "next/image";
import styles from "./page.module.css";
import Header from "./ui/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}></main>
    </>
  );
}
