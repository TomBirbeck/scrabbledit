import { useState } from "react"
import "./players.css"
import { WordContext } from "../Context";


export default function Players(){
    const [players, Setplayers] = useState([]);
    const [player, Setplayer] = useState("");
    const [turn, SetTurn] = useState("");

    console.log(WordContext.currentValue)
    
    function handleplayer1(e){
        e.preventDefault();
        Setplayer(e.target.value);
    }
    
    // function handleplayer2(e){
    //     Setplayer(e.target.value)
    // }
    // function handleplayer3(e){
    //     Setplayer(e.target.value)
    // }
    // function handleplayer4(e){
    //     Setplayer(e.target.value)
    // }

    function clickPlayer1(object){
    const playerstuff = players;
     if (object) {playerstuff.push({name: object, score: 0})};
      Setplayers(playerstuff);
      Setplayer("");
    }

    function playerTurn(player){
        SetTurn(player.name)
    }
    console.log("turn", turn)
    // function clickPlayer2(object){
    //     Setplayers(object[1].name = player)
    // }
    // function clickPlayer3(object){
    //     Setplayers(object[2].name = player)
    // }
    // function clickPlayer4(object){
    //     Setplayers(object[3].name = player)
    // }
    console.log("players", players)
    return (
        <div>
        <h2> It's {turn}'s turn to play</h2>
        <h3>Player input</h3>
        <input type = "text" onChange={handleplayer1} value = {player}></input><button onClick = {() => {clickPlayer1(player)}}>Submit</button>
        {/* <input type = "text" onChange={handleplayer1} placeholder = "player 2"></input><button onClick = {() => {clickPlayer1(player)}}>Submit</button>
        <input type = "text" onChange={handleplayer1} placeholder = "player 3"></input><button onClick = {() => {clickPlayer1(player)}}>Submit</button>
        <input type = "text" onChange={handleplayer1} placeholder = "player 4"></input><button onClick = {() => {clickPlayer1(player)}}>Submit</button> */}
     <table>
            <th>Player</th>
            <th>Score</th>
            {/* <th>{WordContext}</th> */}
            {/* <tbody>
            <td>{players.player1}</td>
            <td>Score: 0</td>
            <td>{players.player2}</td>
            <td>Score: 0</td>
            <td>{players.player3}</td>
            <td>Score: 0</td>
            <td>{players.player4}</td>
            <td>Score: 0</td>
            </tbody> */}
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
