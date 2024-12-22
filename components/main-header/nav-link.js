"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-link.module.css";

const NavLink = ({ href, text }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={
        pathname === href ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {text}
    </Link>
  );
};

export default NavLink;
