import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Room"
        onChange={(event) => setRoom(event.target.value)}
      />
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button className="login__button">Login</button>
      </Link>
    </form>
  );
};

export default Login;
