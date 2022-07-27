import { useState } from "react"
import "./players.css"


export default function Players(){
    // const [players, Setplayers] = useState({player1: "", player2: "", player3: "", player4: ""})
    const [players, Setplayers] = useState([])
    // const [players, Setplayers] = useState([{name: "", score: 0}, {name: "Simon", score: 0}, {name: "Steve", score: 0}, {name: "John", score: 0}])
    const [player, Setplayer] = useState("")
    //console.log("player\", playerz)
    function handleplayer1(e){
        e.preventDefault()
        Setplayer(e.target.value)
    }
    console.log("player",player)
    
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
    const playerstuff = players
     if (object) {playerstuff.push({name: object, score: 0})}
      Setplayers(playerstuff)
      Setplayer("")
    }
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
        <h1>Player input</h1>
        <input type = "text" onChange={handleplayer1} value = {player}></input><button onClick = {() => {clickPlayer1(player)}}>Submit</button>
        {/* <input type = "text" onChange={handleplayer1} placeholder = "player 2"></input><button onClick = {() => {clickPlayer1(player)}}>Submit</button>
        <input type = "text" onChange={handleplayer1} placeholder = "player 3"></input><button onClick = {() => {clickPlayer1(player)}}>Submit</button>
        <input type = "text" onChange={handleplayer1} placeholder = "player 4"></input><button onClick = {() => {clickPlayer1(player)}}>Submit</button> */}
     <table>
            <th>Name</th>
            <th>Score</th>
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
        
        {players.map((val) => {
            return (<tbody key = {players.length++}>
                        <td>{val.name}</td>
                        <td>{val.score}</td>
                        </tbody>
        )})}
    </table>
        </div>
    )
}
