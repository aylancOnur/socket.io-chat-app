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
        <h2>Log In</h2>
        <input
          type="text"
          placeholder="Name"
          className="login__input"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Room"
          className="login__input"
          onChange={(event) => setRoom(event.target.value)}
        />
        {/* div added */}
        <div>
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="login__button">Log In</button>
          </Link>
        </div>
      </form>
  );
};

export default Login;
