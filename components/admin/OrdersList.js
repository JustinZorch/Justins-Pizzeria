import styles from "./OrdersList.module.css";
import SingleOrder from "./SingleOrder";

const OrderList = (props) => {
  /*
      OrderList component to display all orders
      sent via props. 
      Orders are mapped to the 
      SingleOrder component.
  */

  const orders = props.orders;

  return (
    <div>
      <h1 className={styles.heading}> Orders</h1>

      <table className={styles.orders}>
        <thead>
          <tr>
            <th>Order No</th>
            <th>Pizza</th>
            <th>Order Time</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <SingleOrder
              key={order._id}
              _id={order._id}
              count={order.count}
              pizza={order.pizza}
              time={order.createdAt}
              status={order.orderstatus}
              onStatusHandler={props.onStatusHandler}
              onDeleteHandler={props.onDeleteHandler}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
