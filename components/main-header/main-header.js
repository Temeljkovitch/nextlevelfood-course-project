import Link from "next/link";
import logo from "@/assets/logo.png" // @ refers to the root
import styles from "./main-header.module.css";
import Image from "next/image";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      {/* Logo image */}
      <Link className={styles.logo} href="/">
        <Image src={logo} alt="a plate with some food on it" priority></Image>
        NextLevel Food
      </Link>
      {/* Navbar */}
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
