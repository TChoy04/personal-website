import React, {useState} from "react"
import "./Board.css"

function Board() {
const BOARD_SIZE = 15;

const [board,updateBoard] = useState(
    new Array(BOARD_SIZE).fill(0).map(row=> new Array(BOARD_SIZE).fill(0))
)

  return (
    <div className="boardContainer">
        {board.map((row,rowIndex)=>{
            return <div className = "row" key={rowIndex} >
                {row.map((cell,cellIndex)=>{
                    return <div className={`cell ${false ? `worm` : ``}`} key={cellIndex}>
                    </div>
                })}
            </div>
        })}
    </div>
  )
}

export default Board