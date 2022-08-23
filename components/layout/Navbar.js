import styles from "./Navbar.module.css";
import Image from "next/dist/client/image";
import Link from "next/link";

const Navbar = () => {
  /*
      Navbar with Links. Can add more links and edit Login
      and Sign up if User Database is needed.
  */
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>
          <Image
            src="/img/logo.png"
            alt="Justin's Pizzeria Logo"
            height="90"
            width="120"
          ></Image>
        </div>
        <div className={styles.name}>
          <Link href="/">Justins Pizzeria</Link>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/order">Place Order</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/status">Order Status</Link>
          </li>
        </ul>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem2}>Login</li>
          <li className={styles.listItem2}>Sign Up</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
