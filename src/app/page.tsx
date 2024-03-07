import Image from "next/image";
import styles from "./page.module.css";
import Header from "./ui/header";
import Hero from "./ui/hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className={styles.main}></main>
    </>
  );
}
