
import React,{useEffect, useState} from 'react'
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
    const [direction,updateDirection] = useState("RIGHT");
    const [heart,updateHeart] = useState(randomHeartGenerator());
    const [wormBody, updateWormBody] = useState([
        [8,10],
        [9,10]
    ]);
    const onKeyDown = (e) =>{
        if(e.key==='ArrowLeft' || e.key === "d" || e.key === "D"){
            updateDirection("LEFT");
        }
        else if(e.key==='ArrowRight' || e.key === "a" || e.key === "A"){
            updateDirection("RIGHT");
        }
        else if(e.key==='ArrowUp' || e.key === "w" || e.key === "W"){
            updateDirection("UP");
        }
        else if(e.key==='ArrowDown' || e.key === "s" || e.key === "S"){
            updateDirection("DOWN");
        }
        return "";
    }

    const moveWorm = () =>{
        let body = [...wormBody];
        let head = body[body.length-1];
        if(direction==="RIGHT"){
            head = [head[0]-1,head[1]];
        }
        else if(direction==="LEFT"){
            head = [head[0]+1,head[1]];
        }
        else if(direction==="DOWN"){
            head = [head[0],head[1]+1];
        }
        else if(direction==="UP"){
            head = [head[0],head[1]-1];
        }
        body.push(head);
        body.shift();
        updateWormBody(body);
    }
    const onGameOver = () =>{
        alert("Game over!");
        updateWormBody([
            [8,10],
            [9,10]
        ]);
        updateDirection("RIGHT");
        updateHeart(randomHeartGenerator());
    }
    const checkOutOfBounds = ()=>{
        let head = wormBody[wormBody.length-1];
        if(head[0]>=20 || head[1]>=20 || head[0]<0 || head[1]<0) onGameOver();
    }

    useEffect(()=>{
        const mv = setInterval(moveWorm,200)
        checkOutOfBounds();
        return () => {
            window.clearInterval(mv);
          };
        
    });
    useEffect(()=>{
        window.addEventListener("keydown",onKeyDown);
    },[])
  return (
    <div className="board">
        <Worm wormBody={wormBody}></Worm>
        <Heart heart={heart}></Heart>
    </div>
  )
}

export default Board