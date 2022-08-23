import Card from "../ui/Card";
import styles from "./OrderForm.module.css";
import PizzaImage from "./PizzaImage";
import Image from "next/image";

import { useRef, useState } from "react";

const OrderForm = (props) => {
  /*
      OrderForm component to create the user pizza order,
      UseState is used to track users order preferences and
      passes to PizzaImage component to create the visual
      order representation. UseRef is used to collect the data 
      from the users inputs.

      Order data is stored in an object and sent to the onNewOrder
      function which is passed via props.

      A lot can be customized here to enter in more user data, special
      requests, etc This can all be adjusted in the models folder and
      the data object can be structred accordingly.
  */

  const [pizzeriaImg, setPizzeriaImg] = useState(true);
  const [baseImg, setBaseImg] = useState(true);
  const [toppingImg, setToppingImg] = useState(true);
  const [contactImg, setContactImg] = useState(true);

  const pizzeriaOptionRef = useRef();
  const baseOptionRef = useRef();
  const toppingOptionRef = useRef();
  const contactOptionRef = useRef();

  const pizzeriaImgHandler = (event) => {
    if (event.target.value === "Dominos - ONLY DELIVERY") {
      setPizzeriaImg(true);
    } else {
      setPizzeriaImg(false);
    }
  };

  const baseImgHandler = (event) => {
    if (event.target.value === "Classic") {
      setBaseImg(true);
    } else {
      setBaseImg(false);
    }
  };

  const toppingImgHandler = (event) => {
    if (event.target.value === "Hawaii") {
      setToppingImg(true);
    } else {
      setToppingImg(false);
    }
  };

  const contactImgHandler = (event) => {
    if (event.target.value === "SMS") {
      setContactImg(true);
    } else {
      setContactImg(false);
    }
  };

  const status = ["Order Received", "Pizza Prepared", "In The Oven"];
  if (pizzeriaImg) {
    status.push("Delivery man on the way", "Delivered");
  } else {
    status.push("Ready for pickup", "Picked Up");
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredPizzeria = pizzeriaOptionRef.current.value;
    const enteredBase = baseOptionRef.current.value;
    const enteredTopping = toppingOptionRef.current.value;
    const enteredContactMethod = contactOptionRef.current.value;

    const pizza =
      enteredPizzeria + " + " + enteredBase + " + " + enteredTopping;

    const orderData = {
      pizzeria: enteredPizzeria,
      base: enteredBase,
      topping: enteredTopping,
      pizza: pizza,
      orderstatus: status,
      statuscount: 0,
      contact: enteredContactMethod,
    };
    console.log("ORDER DATA");
    console.log(orderData);
    props.onNewOrder(orderData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.heading}>Place your order:</div>

        <div className={styles.option}>
          <label className={styles.label} htmlFor="pizzeria">
            Pizzeria:{" "}
          </label>
          <select
            className={styles.select}
            id="pizzeria"
            ref={pizzeriaOptionRef}
            onChange={pizzeriaImgHandler}
          >
            <option value="Dominos - ONLY DELIVERY">
              Dominos - ONLY DELIVERY
            </option>
            <option value="New York Pizza - ONLY PICK UP">
              New York Pizza - ONLY PICK UP
            </option>
          </select>
        </div>

        <div className={styles.option}>
          <label className={styles.label} htmlFor="base">
            Base:{" "}
          </label>
          <select
            className={styles.select}
            id="base"
            ref={baseOptionRef}
            onChange={baseImgHandler}
          >
            <option value="Classic">Classic</option>
            <option value="Cheesy Crust">Cheesy Crust</option>
          </select>
        </div>

        <div className={styles.option}>
          <label className={styles.label} htmlFor="topping">
            Topping:{" "}
          </label>
          <select
            className={styles.select}
            id="topping"
            ref={toppingOptionRef}
            onChange={toppingImgHandler}
          >
            <option value="Hawaii">Hawaii</option>
            <option value="Hot & Spicy">Hot & Spicy</option>
          </select>
        </div>

        <div className={styles.optionContact}>
          <label className={styles.label} htmlFor="contact">
            Contact Method: {"    "}
          </label>
          <select
            className={styles.select}
            id="contact"
            ref={contactOptionRef}
            onChange={contactImgHandler}
          >
            <option value="SMS">SMS</option>
            <option value="EMAIL">EMAIL</option>
          </select>
          {contactImg ? (
            <div className={styles.contactImage}>
              <Image
                src="/img/sms.png"
                width="25"
                height="25"
                alt="SMS icon"
              ></Image>
            </div>
          ) : (
            <div className={styles.contactImage}>
              <Image
                src="/img/email.jpg"
                width="25"
                height="25"
                alt="Email Icon"
              ></Image>
            </div>
          )}
        </div>

        <div className={styles.button}>
          <button type="submit" className={styles.PlaceOrder}>
            Place Order
          </button>
        </div>
      </form>

      <PizzaImage
        pizzeriaImg={pizzeriaImg}
        baseImg={baseImg}
        toppingImg={toppingImg}
      />
    </Card>
  );
};

export default OrderForm;
