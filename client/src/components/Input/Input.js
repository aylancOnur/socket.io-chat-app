import React from "react";
import "./input.css";
import { FiSend } from "react-icons/fi";

const Input = ({ message, setMessage, sendMessage }) => {
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form className="message__border" onSubmit={(e) => e.preventDefault()}>
      <input
        value={message}
        className="message__input"
        type="text"
        autoFocus
        onChange={handleChange}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <FiSend onClick={(e) => sendMessage(e)}>
        <button className="message__send"></button>
      </FiSend>
    </form>
  );
};

export default Input;
