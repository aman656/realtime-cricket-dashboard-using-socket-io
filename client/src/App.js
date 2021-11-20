import "./App.css";


import {Route,Routes} from "react-router-dom";
import Admin from "./components/Admin";
import LiveScore from "./components/LiveScore";
function App() {
  // const [score, setScore] = useState(0);
  // const [wicket, setWicket] = useState(0);
  // const [over, setOver] = useState(0);
  // const [batting, setBatting] = useState("");
  // const [bowling, setBowling] = useState("");
  // const [live, setLive] = useState({ score: 0, wicket: 0, over: 0,batting:"",bowling:"" });
  // const [last, setLast] = useState([]);

  // useEffect(() => {
  //   async function fetching() {
  //     const response = await fetch("http://localhost:5000/score", {
  //       method: "GET",
  //     });
  //     const data = await response.json();
  //     // setScore(data.score)
  //     // setWicket(data.wicket)
  //     // setOver(data.over)
  //     console.log(data);
  //     setLast(data);

  //     setLast(data);
  //     setLive(data[data.length - 1]);
  //   }
  //   fetching();
  // }, []);
  // useEffect(() => {
  //   const socket = io("http://localhost:5000"); // to connect with locally running Socker.io server

  //   socket.on("connect", function () {
  //     console.log("connected to server");
  //   });
  //   socket.on("disconnect", function (message) {
  //     console.log("disconnected from server: ", message);
  //   });
  //   socket.on("score", function (data) {
  //     console.log(data);
  //     setLive(data);
  //   });

  //   return () => {
  //     socket.close();
  //   };
  // }, []);

  // const scoreInput = (event) => {
  //   setScore(event.target.value);
  // };
  // const wicketInput = (event) => {
  //   setWicket(event.target.value);
  // };
  // const OverInput = (event) => {
  //   setOver(event.target.value);
  // };
  // const BattingInput = (event) => {
  //   setBatting(event.target.value);
  // };
  // const BowlingInput = (event) => {
  //   setBowling(event.target.value);
  // };
  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   async function submitting() {
  //     const response = await fetch("http://localhost:5000/score", {
  //       method: "POST",
  //       body: JSON.stringify({ score, wicket, over,batting,bowling }),
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //   }
  //   try {
  //     submitting();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (

    <Routes>
      <Route  exact path="/"  element={<LiveScore/>}  />
      <Route path="/admin"  element={<Admin/>}     />
      {/* <Redirect to="/" /> */}
    </Routes>
    
  );
}

export default App;
