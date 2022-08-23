import Head from "next/head";
import OrderStatus from "../../components/orders/OrderStatus";

import styles from "./Status.module.css";

const Status = (props) => {
  /*
      Status Page /status

      Uses getServerSideProps() to retrieve all orders from MONGO,
      map and then pass them as props to the orderStatus component.
  */

  return (
    <div className={styles.container}>
      <Head>
        <title>Order Status</title>
        <meta name="description" content="Placing a new order" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OrderStatus orders={props.orders}></OrderStatus>
    </div>
  );
};

export const getServerSideProps = async () => {
  const URL = process.env.NEXT_PUBLIC_URL;
  const res = await fetch(URL + "/api/orders", {
    method: "GET",
  });

  const orders = await res.json();
  const allOrders = JSON.parse(orders);

  return {
    props: {
      orders: allOrders.map((order) => ({
        pizza: order.pizza,
        orderstatus: order.orderstatus,
        count: order.statuscount,
        time: order.createdAt,
        _id: order._id.toString(),
      })),
    },
  };
};

export default Status;
