import React from "react";
import Messages from "../../Messages/Messages";
import Input from "../../Input/Input";
const ChatRight = ({ messages, message, name, setMessage, sendMessage }) => {
  return (
    <div className="chat__right">
      <div className="chat__top">
        <h4 className="chat__top-h4">To:</h4>
        <h3 className="chat__top-h3">User Name</h3>
      </div>
      <hr className="chat__hr" />
      <Messages messages={messages} name={name} />
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default ChatRight;
