import styles from "./Orfderconfirmation.module.css";

const OrderConfirmation = () => {
  /*
      Order Confirmation component to confirm the users current
      order is correct and give the option to go back and change
      or confirm it.

      *** This is not currently been used ***
  */
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          {" "}
          This is yor pizza combination: bla + bla + bla{" "}
        </h1>
      </div>

      <div className={styles.option}>
        <label className={styles.label}>Status update method: </label>
        <select className={styles.select} id="topping">
          <option>SMS</option>
          <option>EMAIL</option>
        </select>
      </div>
    </div>
  );
};

export default OrderConfirmation;
