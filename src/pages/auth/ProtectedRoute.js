import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../../contexts/authContext";

function ProtectedRoute({ component: Component }) {
  const [state, setState] = useState("loading");
  const { loggedInUser } = useContext(AuthContext);

  console.log(loggedInUser);
  /* async function validLocalstorage(){
  if(localStorage.getItem("loggedInUser")){

  }
}

  useEffect(() => {
   

    setState()
  }, []);
 */
  if (loggedInUser.user._id) {
    return <Component />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;

/*  */
