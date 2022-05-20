//is rensponsible for fetching the routes for the user name and room name.
import Chat from "./chat/chat";
import Process from "./process/process";
import Home from "./home/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import "./App.scss";
import React from "react";
import io from "socket.io-client";

const socket = io.connect("/");

const Appmain = (props) => {
  const { username } = useParams();
  const { roomname } = useParams();
  return (
    <React.Fragment>
      <div className="right">
        <Chat username={username} roomname={roomname} socket={socket} />
      </div>
      <div className="left">
        <Process />
      </div>
    </React.Fragment>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home socket={socket} />} />
          {/* <Home socket={socket} /> */}
          <Route path="/chat/:roomname/:username" element={<Appmain />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// we added routes and imported the components (React, io, Chat, Process, Home). We rendered home components and got username and roomname from the routes on the base URL.

//On this path, /chat/roomname/username the AppMain component is rendered, and it returns two divs. The first div is for the chatbox and the other returns process for displaying encrypted and decrypted, incoming and outgoing messages, respectively.
