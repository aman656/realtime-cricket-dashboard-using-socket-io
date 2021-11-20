import '../App.css'
import { useState,useEffect } from 'react';
import { io } from 'socket.io-client';


const LiveScore =()=>{
    const [live, setLive] = useState({ score: 0, wicket: 0, over: 0,batting:"",bowling:"" });
    const [last, setLast] = useState([]);
    
  useEffect(() => {
    async function fetching() {
      const response = await fetch("http://localhost:5000/score", {
        method: "GET",
      });
      const data = await response.json();
      // setScore(data.score)
      // setWicket(data.wicket)
      // setOver(data.over)
      console.log(data);
      setLast(data);

      setLast(data);
      setLive(data[data.length - 1]);
    }
    fetching();
  }, []);
  useEffect(() => {
    const socket = io("http://localhost:5000"); // to connect with locally running Socker.io server

    socket.on("connect", function () {
      console.log("connected to server");
    });
    socket.on("disconnect", function (message) {
      console.log("disconnected from server: ", message);
    });
    socket.on("score", function (data) {
      console.log(data);
      setLive(data);
    });

    return () => {
      socket.close();
    };
  }, []);
    return(
         <div className="App">
      <h1>Scoreboard</h1>
      <div className="main">
        <p className="teams">
          <strong>{live.batting}</strong> vs {live.bowling}
        </p>
        <p className="toss">Aus won the toss (Bat)</p>
        <p className="score">
          {live.score}/{live.wicket} {live.over}overs
        </p>
        <div className="mmid">
          <div className="mid1">
            {" "}
            <p style={{ width: "10%" }}>Batting</p> <p>R(B)</p> <p>4s</p>{" "}
            <p>6s</p> <p>SR</p>
          </div>
          <div className="mid">
            <h3 style={{ width: "10%" }}>Smith*</h3>
            <p>30(15)</p>
            <p>4</p>
            <p>0</p>
            <p>200</p>
          </div>
          <div className="mid">
            <h3 style={{ width: "10%" }}>Warner</h3>
            <p>32(10)</p>
            <p>4</p>
            <p>2</p>
            <p>320</p>
          </div>
          <div className="mid1">
            <p style={{ width: "10%" }}>Bowling</p>
            <p>O</p>
            <p>R</p>
            <p>W</p>
            <p>M</p>
          </div>
          <div className="mid">
            <h3 style={{ width: "10%" }}>Cottrel</h3>
            <p>3.4</p>
            <p>26</p>
            <p>2</p>
            <p>0</p>
          </div>
          <div className="mid">
            <h3 style={{ width: "10%" }}>Narine</h3>
            <p>4</p>
            <p>32</p>
            <p>3</p>
            <p>0</p>
          </div>
        </div>
      </div>
</div>

    )
}

export default LiveScore