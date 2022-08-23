import styles from "./Background.module.css";
import Image from "next/image";

const Background = () => {
  /*
    Home page background image
  */
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/img/backgroundPizza.jpg"
          alt="Background Pizza Image"
          layout="fill"
        ></Image>
      </div>
    </div>
  );
};

export default Background;
