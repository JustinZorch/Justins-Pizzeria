import { useState } from "react";
import styles from "./SingleOrder.module.css";

const SingleOrder = (props) => {
  /*
      SingleOrder component with dynamic data rendering 
      passed through via props. UseState for statusValue 
      used to render "Remove Order" button when statusVale
      === 4 or the end of the order process. "Change Status"
      button sends back the order _id and status value back
      to the handler function 2 levels up.
  */

  const [statusValue, setStatusValue] = useState(0);

  const statusValueHandler = (event) => {
    setStatusValue(event.target.value);
  };
  return (
    <tr>
      <td>{props._id.slice(0, 5)}...</td>

      <td>{props.pizza}</td>
      <td>
        {Math.round((Date.now() - Date.parse(props.time)) / 60000)} Minutes
      </td>
      <td style={{ fontWeight: "bold" }}>{props.status[props.count]}</td>
      <td>
        <form className={styles.statusForm}>
          <select className={styles.select} onChange={statusValueHandler}>
            {props.status.map((state, index) => (
              <option key={index + 1} value={index}>
                {state}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className={styles.changeStatus}
            onClick={() => props.onStatusHandler(props._id, statusValue)}
          >
            Change status
          </button>

          {props.count === 4 && (
            <button
              type="submit"
              className={styles.remove}
              onClick={() => props.onDeleteHandler(props._id)}
            >
              Remove Order
            </button>
          )}
        </form>
      </td>
    </tr>
  );
};

export default SingleOrder;
