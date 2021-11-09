import React, { useEffect, useState } from "react";
import axios from "axios";

export default function (Component, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const [userId, setUserId] = useState("");
    useEffect(() => {
      axios.get("/api/user/auth").then((response) => {
        if (!response.data.isAuth) {
          if (option) {
            props.history.push("/signin");
          }
        } else {
          if (option === false) props.history.push("/");
          setUserId(response.data._id);
        }
      });
    }, []);
    return <Component userId={userId} />;
  }
  return AuthenticationCheck;
}
