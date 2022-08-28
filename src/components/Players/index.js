import { useState } from "react"
import "./players.css"
// import { WordContext } from "../Context";


export default function Players({score}){
    const [players, Setplayers] = useState([]);
    const [player, Setplayer] = useState("");
    const [turn, SetTurn] = useState("");
    // const [iso, setIso] = useState("")

    console.log("inside players", score)
    
    function handleplayer1(e){
        e.preventDefault();
        Setplayer(e.target.value);
    }

    function clickPlayer1(object){
    const playerstuff = players;
     if (object) {playerstuff.push({name: object, score: 0})};
      Setplayers(playerstuff);
      Setplayer("");
    }

    function playerTurn(player){
        SetTurn(player.name)
        isolate(turn, players, score)
    }

    function isolate(name, players, score){
        players.filter((peep) => { if (peep.name === name){peep.score += score} return peep});
    }
    
    return (
        <div>
        <div>{turn.length > 0 ? <h2> It's {turn}'s turn to play</h2>: null}</div>
        <h3 id="input-header">Player input</h3>
        <input type = "text" onChange={handleplayer1} value = {player}></input><button onClick = {() => {clickPlayer1(player)}}>Submit</button>
     <table>
        <thead><tr><td>Player</td><td>Score</td></tr></thead>
        <tbody>
        {players.map((val) => {
            return (<tr key = {players.length++}>
                        <td><button onClick = {() => {playerTurn(val)}}>{val.name}</button></td>
                        <td>{val.score}</td>
                        </tr>
        )})}
                </tbody>
    </table>
        </div>
    )
}
