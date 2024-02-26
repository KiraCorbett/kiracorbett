import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/flying.jpeg"
          alt="Crow Logo"
          layout="responsive"
          width={3000}
          height={1500}
          priority
        />
      </div>
    </main>
  );
}
