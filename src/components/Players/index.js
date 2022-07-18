import "./players.css"

export default function Players({playersNames}){
    return (
        <table>
            <th>Name</th>
            <th>Score</th>
            
        
        {playersNames.map((val) => {
            return (<tbody key = {playersNames.length++}>
                        <td>{val.player}</td>
                        <td>{val.score}</td>
                        </tbody>
        )})}
        </table>
    )
}
