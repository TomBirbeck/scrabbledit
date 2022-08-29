import { useState } from "react"
import "./players.css"


export default function Players({score, setScore}){
    const [player, setPlayer] = useState("");
    const [player1, setPlayer1] = useState({id: 1, name: "player 1", score: 0});
    const [player2, setPlayer2] = useState({id: 2, name: "player 2", score: 0});
    const [player3, setPlayer3] = useState({id: 3, name: "player 3", score: 0});
    const [player4, setPlayer4] = useState({id: 4, name: "player 4", score: 0});
    const [turn, setTurn] = useState({});
    const [winner, setWinner] = useState("");
    // const [players, setPlayers] = useState([])

    
    function handlePlayer(e){
        e.preventDefault();
        let name = e.target.value
        setPlayer(name);
    }

    function handleSubmitPlayer1(object){
    const playerstuff = {...player1, name: object, score: 0};
      setPlayer1(playerstuff);
      setPlayer("");
    }
    // console.log("players", players)

    // function handleSubmitPlayer(object){
    // const playerstuff = players;
    //  if (object) {playerstuff.push({name: object, score: 0})};
    //   setPlayers(playerstuff);
    //   setPlayer("");
    // }

    function playerTurn(player){
        setTurn(player)
        isolate(turn, score)
    }
    console.log("turn",turn)
    console.log("turn name", turn.name)

    function isolate(player, score){
        console.log("iso player", player)
    const newScore = player.score + score
    let object = {...player, score: newScore}
    if (player.id === 1){
        setPlayer1(object)
        setScore(0)
    }
    if (player.id === 2){
        setPlayer2(object)
    }
    if (player.id === 3){
        setPlayer3(object)
    }
    if (player.id === 4){
        setPlayer4(object)
    }
    }

    function handleWinner(players) {
      let winner = players.sort((a, b) => {return a.score - b.score})
      setWinner(winner[3].name)
    }

    console.log("player1", player1)
    
    return (
        <section id="player-section">
        <div>{winner.length > 0 ? <h2>{winner} is the winnner. Congratulations!</h2>: null}</div>
        <div>{turn.name ? <h2> It's {turn.name}'s turn to play</h2>: null}</div>
        {/* <h3 id="input-header">Player input</h3> */}
        <input id="player-input-box" type = "text" onChange={(e) => {handlePlayer(e)}} value = {player} placeholder="Insert player name"></input><button id="player-submit" onClick = {() => {handleSubmitPlayer1(player)}}>Submit</button>
     <table>
        <thead><tr><td>Player</td><td>Score</td></tr></thead>
        <tbody>
        <tr key = {player1.name}>
                        <td><button id="player-button" onClick = {() => {playerTurn(player1)}}>{player1.name}</button></td>
                        <td>{player1.score}</td>
                        </tr>
        <tr key = {player2.name}>
                        <td><button id="player-button" onClick = {() => {playerTurn(player2)}}>{player2.name}</button></td>
                        <td>{player2.score}</td>
                        </tr>
        <tr key = {player3.name}>
                        <td><button id="player-button" onClick = {() => {playerTurn(player3)}}>{player3.name}</button></td>
                        <td>{player3.score}</td>
                        </tr>
        <tr key = {player4.name}>
                        <td><button id="player-button" onClick = {() => {playerTurn(player4)}}>{player4.name}</button></td>
                        <td>{player4.score}</td>
                        </tr>
                </tbody>
        {/* <tbody>
        {players.map((val) => {
            return (<tr key = {players.length++}>
                        <td><button id="player-button" onClick = {() => {playerTurn(val)}}>{val.name}</button></td>
                        <td>{val.score}</td>
                        </tr>
        )})}
                </tbody> */}
    </table>
    {/* <button id="winner-button" onClick={() => handleWinner(players)}>Winner</button> */}
        </section>
    )
}
