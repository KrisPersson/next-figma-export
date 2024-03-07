import Image from "next/image";
import styles from "./page.module.css";
import Header from "./ui/header";
import Hero from "./ui/hero";
import SmallCardsContainer from "./ui/small-cards-container";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <SmallCardsContainer />
      </main>
    </>
  );
}
