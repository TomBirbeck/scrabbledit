import { useState } from "react"
import "./players.css"
// import { WordContext } from "../Context";


export default function Players(){
    const [players, Setplayers] = useState([]);
    const [player, Setplayer] = useState("");
    const [turn, SetTurn] = useState("");
    
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
    }
    
    console.log("players", players)
    return (
        <div>
        <div>{turn.length > 0 ? <h2> It's {turn}'s turn to play</h2>: null}</div>
        <h3>Player input</h3>
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
