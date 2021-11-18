import React, { useEffect, useState } from "react";
import "./chat.css";
import queryString from "query-string";
import ChatLeft from "./ChatLeft/ChatLeft";
import ChatRight from "./ChatRight/ChatRight";
import { IconContext } from "react-icons";
import io from "socket.io-client";

const ENDPOINT = "https://reactsocket-io.herokuapp.com/";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    setMessages((messages) => [...messages, message]);

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <IconContext.Provider value={{ className: "icons" }}>
      <div className="container">
        <div className="chat">
          <ChatLeft users={users} />
          <ChatRight
            messages={messages}
            name={name}
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            users={users}
          />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Chat;
