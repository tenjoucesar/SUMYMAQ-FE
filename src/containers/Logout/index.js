
import { useEffect } from "react";
import Auth from "services/AuthService";

function Logout() {
  function lougoutAndRedirect() {
    Auth.logout(); //Llamamos al objecto auth con la funcion logout
    window.location = "/";
  }

  useEffect(() => {
    return lougoutAndRedirect();
  }, [])

  return null;
}

export default Logout;