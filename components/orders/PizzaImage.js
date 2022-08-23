import styles from "./PizzaImage.module.css";
import Image from "next/image";

const PizzaImage = (props) => {
  /*
      PizzaImage component to display the user changes
      in real time on the screen to give a better user feel
      and feedback of their current order. 
  */
  return (
    <div className={styles.container}>
      <div className={styles.optionImage}>
        {props.pizzeriaImg ? (
          <Image
            src="/img/dominoes.svg"
            width="180"
            height="180"
            alt="Dominoes Pizza Logo"
          ></Image>
        ) : (
          <Image
            src="/img/newyork.svg"
            width="180"
            height="180"
            alt="New York Pizza Logo"
          ></Image>
        )}
      </div>
      <div className={styles.optionImage}>
        <Image
          src="/img/plus.svg"
          width="70"
          height="70"
          alt="Plus Symbol"
        ></Image>
      </div>
      <div className={styles.optionImage}>
        {props.baseImg ? (
          <Image
            src="/img/classic_base.png"
            width="180"
            height="180"
            alt="Classic Base"
          ></Image>
        ) : (
          <Image
            src="/img/cheese_base.png"
            width="180"
            height="180"
            alt="Cheese Crust Base"
          ></Image>
        )}
      </div>
      <div className={styles.optionImage}>
        <Image
          src="/img/plus.svg"
          width="70"
          height="70"
          alt="Plus Symbol"
        ></Image>
      </div>
      <div className={styles.optionImage}>
        {props.toppingImg ? (
          <Image
            src="/img/pineapple.png"
            width="180"
            height="180"
            alt="Hawaii Topping"
          ></Image>
        ) : (
          <Image
            src="/img/chili.svg"
            width="180"
            height="180"
            alt="Hot and Spicy Topping"
          ></Image>
        )}
      </div>
    </div>
  );
};

export default PizzaImage;
