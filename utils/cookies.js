import { parseCookies, setCookie, destroyCookie } from "nookies";

function handleClick() {
  /* 
    Nookies framework to set and destroy cookies.
    Used to give admin privileges.
 */

  // Parse
  const cookies = parseCookies();

  // Set
  setCookie(null, "fromClient", "value", {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });

  // Destroy
  destroyCookie(null, "cookieName");
}
