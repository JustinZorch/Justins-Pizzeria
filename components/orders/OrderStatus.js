import styles from "./OrderStatus.module.css";
import SingleOrderStatus from "./SingleOrderStatus";

const OrderStatus = (props) => {
  /*
      OrderStatus component shows all currently working
      orders and their current Order No, Pizza,order state
      and time taken since order was first sent.
  */
  const orders = props.orders;

  return (
    <div>
      <h1 className={styles.heading}>Orders Status</h1>
      <hr />
      <table className={styles.orders}>
        <thead>
          <tr>
            <th>Order No</th>
            <th>Pizza</th>
            <th>Time Taken</th>
            <th>Status</th>
          </tr>
        </thead>
        {orders.map((order) => (
          <SingleOrderStatus
            key={order._id}
            pizza={order.pizza}
            orderstatus={order.orderstatus[order.count]}
            time={Math.round((Date.now() - Date.parse(order.time)) / 60000)}
            _id={order._id}
          />
        ))}
      </table>
    </div>
  );
};

export default OrderStatus;
