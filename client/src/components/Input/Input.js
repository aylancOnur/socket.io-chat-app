import React from "react";
import "./input.css";
import { FiSend } from "react-icons/fi";

const Input = ({ message, setMessage, sendMessage }) => {
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  console.log("Message =>", message);

  return (
    <form className="message__border" onSubmit={(e) => e.preventDefault()}>
      <input
        value={message}
        className="message__input"
        type="text"
        onChange={handleChange}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <FiSend>
        <button
          className="message__send"
          onClick={(e) => sendMessage(e)}
        ></button>
      </FiSend>
    </form>
  );
};

export default Input;
