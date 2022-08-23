import styles from "./Footer.module.css";

const Footer = () => {
  /*
    Basic footer setup. Can add more details as needed
  */
  return (
    <div className={styles.container}>
      <div className={styles.item}>Our Pizzas are the best pizzas!!!</div>
      <div className={styles.item}>123 Amsterdam Centraal</div>
    </div>
  );
};

export default Footer;
