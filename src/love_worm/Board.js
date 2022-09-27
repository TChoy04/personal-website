import React,{useState} from 'react'
import "./Board.css"
import Heart from "./Heart";
import Worm from "./WormBody.js"

function Board() {
    const [heart,updateHeart] = useState([1,2])
    const [wormBody, updateWormBody] = useState([
        [0,0],
        [0,1],
    ])
  return (
    <div className="board">
        <Worm wormBody={wormBody}></Worm>
        <Heart heart={heart}></Heart>
    </div>
  )
}

export default Board