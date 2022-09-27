import React,{useState} from 'react'
import "./Board.css"
import Heart from "./Heart";
import Worm from "./WormBody.js"
//Copied from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
function randomHeartGenerator(){
    let x = randomIntFromInterval(0,19);
    let y = randomIntFromInterval(0,19);
    return [x,y]
}
function Board() {
    const [heart,updateHeart] = useState(randomHeartGenerator())
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