import Head from "next/head";
import { useState } from "react";
import OrderList from "../../components/admin/OrdersList";
import styles from "./Admin.module.css";
import nookies from "nookies";

const Admin = (props) => {
  /*
      Admin page /admin

      Only renders if correct cookie is present or else redirects to admin/login page.
      Makes use of getServerSideProps() to retrieve orders from MongoDb and map and then
      pass them as props to the page to be rendered. 

      The page contains 3 handlers to take care of the "Change Status" and "Remove Order"
      buttons. 
      
      The statusHandler function receives the unique Id and status of the order and
      connects to the api/orders/[id] to find the order, change it and recreate the new array 
      of orders. It calls on sendStatus() to send the current status of the order and use the 
      api/sms to send an sms to the user about their orders current state. The useState() rerenders 
      the page with the new information once the new array of orders has been completed.

      The deleteHandler function only retrieves the unique Id and calls on the api/order/[id] but
      with the "DELETE" method to delete the order and recreate a new array of orders without the 
      current order to rerender the page.
  */

  const [ordersList, setOrdersList] = useState(props.orders);
  const URL = process.env.NEXT_PUBLIC_URL;

  const sendStatus = async (message) => {
    //calling sms status update API
    try {
      const response = await fetch(URL + "/api/sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: message,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const statusHandler = async (id, value) => {
    //calling update order status on MongoDB
    try {
      const res = await fetch(URL + "/api/orders/" + id, {
        method: "PUT",
        query: id,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ statuscount: value }),
      });

      const data = await res.json();
      const order = JSON.parse(data);

      sendStatus(await order.orderstatus[order.statuscount]);
      //add new entry and remove old and create new orders array to trigger new state
      setOrdersList([order, ...ordersList.filter((order) => order._id !== id)]);
    } catch (err) {
      //can create a more detailed method to show or store errors
      console.log(err);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const res = await fetch(URL + "/api/orders/" + id, {
        method: "DELETE",
        query: id,
      });
      const data = await res.json();
      const order = await JSON.parse(data);
      //remove deleted order from list and create new array to trigger new state
      setOrdersList(ordersList.filter((order) => order._id !== id));
    } catch (err) {
      //can create a more detailed method to show or store errors
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Order Status</title>
        <meta name="description" content="Placing a new order" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <OrderList
        orders={ordersList}
        onStatusHandler={statusHandler}
        onDeleteHandler={deleteHandler}
      ></OrderList>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  //using nookies to get cookies
  const cookies = nookies.get(ctx);

  //page only render if admin is logged in correctly else redirected
  //to login page
  if (cookies.token !== process.env.NEXT_PUBLIC_COOKIES_TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

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
        createdAt: order.createdAt,
        count: order.statuscount,
        _id: order._id.toString(),
      })),
    },
  };
};

export default Admin;
