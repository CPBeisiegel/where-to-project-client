import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({ token: "", user: {} });

function AuthContextComponent(props) {
  const [loggedInUser, setLoggedInUser] = useState({ token: "", user: {} });
  const history = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");

    const parsedStoredUser = JSON.parse(storedUser || '""');

    if (parsedStoredUser.user) {
      setLoggedInUser({ ...parsedStoredUser });
    }
  }, []);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser({ token: "", user: {} });
    history("/login");
  }

  return (
    <AuthContext.Provider
      value={{ loggedInUser, setLoggedInUser, handleLogOut }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContextComponent, AuthContext };
