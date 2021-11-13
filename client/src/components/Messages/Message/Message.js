import React from "react";
import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  console.log("text", text);

  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="message">
      <p className="message__from">{trimmedName}</p>
      <div className="message__container">
        <p className="message__body">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div
      className="message"
      style={{
        flexDirection: "row-reverse"
      }}
    >
      <p className="message__from">{user}</p>
      <div className="message__container">
        <p className="message__body">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  );
};

export default Message;
