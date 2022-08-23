const SingleOrderStatus = (props) => {
  /*
      Single Order Component to display the individual orders details.
  */
  return (
    <tbody>
      <tr>
        <td>{props._id}</td>
        <td>{props.pizza}</td>
        <td>{props.time} Minutes</td>
        <td style={{ fontWeight: "bold" }}>{props.orderstatus}</td>
      </tr>
    </tbody>
  );
};

export default SingleOrderStatus;
