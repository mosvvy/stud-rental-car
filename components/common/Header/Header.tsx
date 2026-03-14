import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

const Headerr = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={100} height={16} />
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Headerr;
