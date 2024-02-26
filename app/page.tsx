import Image from "next/image";
import styles from "./page.module.css";
import Divider from "./components/Divider";
import NavBar from "./components/NavBar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiMountainRoad } from "react-icons/gi";

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

      <FaGithub className={styles.icon}/>
      <FaLinkedin className={styles.icon}/>
      <GiMountainRoad className={styles.icon}/>

      <Divider />

      <NavBar />

      <div className={styles.center}>
        <h3>Software Engineer</h3>
      </div>
    </main>
  );
}
