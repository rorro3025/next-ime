import Login from "./Login";
import SingUp from "./SingUp";
import { useApp } from "../context/appContext";
import Message from "./Message";
import React, { useState } from "react";

function Select() {
  const { setIsLoggedIn, setUser } = useApp();
  const [visible, setVisible] = useState(false);
  const [messageText, setMessageText] = useState("");

  return (
    <div className={"container"}>
      {visible && <Message message={messageText} />}
      <Login
        setIsLoggedIn={setIsLoggedIn}
        setMessage={setMessageText}
        setVisibility={setVisible}
        setUser={setUser}
      />
    </div>
  );
}

export default Select;
