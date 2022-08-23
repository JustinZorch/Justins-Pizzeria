import Head from "next/head";
import styles from "../styles/Home.module.css";
import Background from "../components/Layout/Background";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Justin's Pizzeria</title>
        <meta name="description" content="The best pizza in The Netherlands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background></Background>
    </div>
  );
};

export default Home;
