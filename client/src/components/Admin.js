import '../App.css'
import { useState } from 'react';

const Admin = ()=>{
    const [score, setScore] = useState(0);
    const [wicket, setWicket] = useState(0);
    const [over, setOver] = useState(0);
    const [batting, setBatting] = useState("");
    const [bowling, setBowling] = useState("");
    
  const scoreInput = (event) => {
    setScore(event.target.value);
  };
  const wicketInput = (event) => {
    setWicket(event.target.value);
  };
  const OverInput = (event) => {
    setOver(event.target.value);
  };
  const BattingInput = (event) => {
    setBatting(event.target.value);
  };
  const BowlingInput = (event) => {
    setBowling(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    async function submitting() {
      const response = await fetch("http://localhost:5000/score", {
        method: "POST",
        body: JSON.stringify({ score, wicket, over,batting,bowling }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log(data);
    }
    try {
      submitting();
    } catch (err) {
      console.log(err);
    }
  };
    return(
        
      <div>
      <form onSubmit={submitHandler}>
        <h3>Live Score</h3>
        <input
          type="text"
          placeholder="Team Batting"
          value={batting}
          onChange={BattingInput}
        />
         <input
          type="text"
          placeholder="Team Bowling"
          value={bowling}
          onChange={BowlingInput}
        />
        <input
          type="number"
          placeholder="score"
          value={score}
          onChange={scoreInput}
        />
        <input
          type="number"
          value={wicket}
          placeholder="wicket"
          onChange={wicketInput}
        />
        <input
          type="number"
          value={over}
          placeholder="over"
          onChange={OverInput}
        />
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={submitHandler}>
        <h3>Batting (on strike)</h3>
        <input
          type="text"
          placeholder="name"
          value={score}
          onChange={scoreInput}
        />
        <input
          type="text"
          value={wicket}
          placeholder="runs"
          onChange={wicketInput}
        />
        <input
          type="text"
          value={over}
          placeholder="balls"
          onChange={OverInput}
        />
        <input
          type="text"
          value={over}
          placeholder="fours"
          onChange={OverInput}
        />
        <input
          type="text"
          value={over}
          placeholder="sixes"
          onChange={OverInput}
        />

        <button type="submit">Submit</button>
        <h3>Batting (off strike)</h3>
        <input
          type="text"
          placeholder="name"
          value={score}
          onChange={scoreInput}
        />
        <input
          type="text"
          value={wicket}
          placeholder="runs"
          onChange={wicketInput}
        />
        <input
          type="text"
          value={over}
          placeholder="balls"
          onChange={OverInput}
        />
        <input
          type="text"
          value={over}
          placeholder="fours"
          onChange={OverInput}
        />
        <input
          type="text"
          value={over}
          placeholder="sixes"
          onChange={OverInput}
        />

        <button type="submit">Submit</button>
      </form>
    </div>

    )
}
export default Admin