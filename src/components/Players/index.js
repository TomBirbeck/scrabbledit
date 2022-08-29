import { useState } from "react"
import "./players.css"


export default function Players({score}){
    // const [players, Setplayers] = useState([]);
    const [player, setPlayer] = useState("");
    const [turn, setTurn] = useState("");
    const [winner, setWinner] = useState("");
    const [players, setPlayers] = useState([])

    
    function handlePlayer(e){
        e.preventDefault();
        let name = e.target.value
        setPlayer(name);
    }

    // function handleSubmitPlayer(object){
    // const playerstuff = [...players,{name: object, score: 0}];
    //   setPlayers(playerstuff);
    //   setPlayer("");
    // }
    // console.log("players", players)

    function handleSubmitPlayer(object){
    const playerstuff = players;
     if (object) {playerstuff.push({name: object, score: 0})};
      setPlayers(playerstuff);
      setPlayer("");
    }

    function playerTurn(player){
        setTurn(player.name)
        isolate(turn, players, score)
    }

    function isolate(name, players, score){
        players.filter((peep) => { if (peep.name === name){peep.score += score} return peep});
    }

    function handleWinner(players) {
      let winner = players.sort((a, b) => {return a.score - b.score})
      setWinner(winner[3].name)
    }

    console.log("players", players)
    
    return (
        <section id="player-section">
        <div>{winner.length > 0 ? <h2>{winner} is the winnner. Congratulations!</h2>: null}</div>
        <div>{turn.length > 0 ? <h2> It's {turn}'s turn to play</h2>: null}</div>
        {/* <h3 id="input-header">Player input</h3> */}
        <input id="player-input-box" type = "text" onChange={(e) => {handlePlayer(e)}} value = {player} placeholder="Insert player name"></input><button id="player-submit" onClick = {() => {handleSubmitPlayer(player)}}>Submit</button>
     <table>
        <thead><tr><td>Player</td><td>Score</td></tr></thead>
        <tbody>
        {players.map((val) => {
            return (<tr key = {players.length++}>
                        <td><button id="player-button" onClick = {() => {playerTurn(val)}}>{val.name}</button></td>
                        <td>{val.score}</td>
                        </tr>
        )})}
                </tbody>
    </table>
    <button id="winner-button" onClick={() => handleWinner(players)}>Winner</button>
        </section>
    )
}
