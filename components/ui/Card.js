import classes from "./Card.module.css";

function Card(props) {
  /*
      Basic card component
  */
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
