import type { Metadata } from "next";
import { archia } from "./fonts";

import "./globals.scss";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.html}>
      <body className={`${archia.className} antialiased ${styles.body}`}>
        {children}
      </body>
    </html>
  );
}
