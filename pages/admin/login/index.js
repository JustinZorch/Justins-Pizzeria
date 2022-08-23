import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Login.module.css";
import nookies from "nookies";

const Login = () => {
  /*
      Admin login page /admin/login

      Admin or any users are redirected here if no cookie is present or
      the cookie does not match the ENV cookies token.

      UseState() is used to capture Admin username, password
      and set the error state if the login details are incorrect. 

      If the entered details match the ENV details a cookie is created and
      set and the user is redirected using useRouter() to the /admin page
      where they can manipulate orders
  */

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const loginHandler = (ctx) => {
    if (
      username === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
      password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      nookies.set(ctx, "token", process.env.NEXT_PUBLIC_COOKIES_TOKEN, {
        //set for 1 hour
        maxAge: 60 * 60,
        path: "/",
      });
      router.push("/admin");
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Orders</h1>
        <input
          placeholder="username"
          className={styles.input}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={loginHandler} className={styles.login}>
          Log In
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  );
};

export default Login;
