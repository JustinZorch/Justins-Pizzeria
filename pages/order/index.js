import Head from "next/head";
import styles from "./Order.module.css";
import OrderForm from "../../components/orders/OrderForm";
import { useRouter } from "next/router";

const Order = (enteredOrderData) => {
  /*
      Order page /order

      Page used for creating a new pizza order.

      Passes the newOrderHandler function through the
      OrderFrom component. 

      newOrderHandler function receives the entered user data
      and passes it to the "POST" api/order.
  */

  const router = useRouter();

  const newOrderHandler = async (enteredOrderData) => {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredOrderData),
    });

    router.push("/status");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>New Order</title>
        <meta name="description" content="Placing a new order" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OrderForm onNewOrder={newOrderHandler} />
    </div>
  );
};

export default Order;
