import { render } from '@testing-library/react';
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
        [9,9]
    ]);
    const onKeyDown = (e) =>{
        if(e.key=='ArrowLeft' || e.key == "d" || e.key == "D"){
            updateDirection("LEFT");
            moveSnake();
        }
        else if(e.key=='ArrowRight' || e.key == "a" || e.key == "A"){
            updateDirection("RIGHT");
            moveSnake();
        }
        else if(e.key=='ArrowUp' || e.key == "w" || e.key == "W"){
            updateDirection("UP");
            moveSnake();
        }
        else if(e.key=='ArrowDown' || e.key == "s" || e.key == "S"){
            updateDirection("DOWN");
            moveSnake();
        }
        return "";
    }

    const moveSnake = () =>{
        let body = [...wormBody];
        let head = body[body.length-1];
        if(direction=="RIGHT"){
            head = [head[0]+1,head[1]];
        }
        else if(direction=="LEFT"){
            head = [head[0]-1,head[1]];
        }
        else if(direction=="DOWN"){
            head = [head[0],head[1]+1];
        }
        else if(direction=="UP"){
            head = [head[0],head[1]-1];
        }
        body.push(head);
        body.shift();
        updateWormBody(body);
    }
    useEffect(()=>{
        setInterval(moveSnake,500)
        window.addEventListener("keydown",onKeyDown);
    });
    render();
  return (
    <div className="board">
        <Worm wormBody={wormBody}></Worm>
        <Heart heart={heart}></Heart>
    </div>
  )
}

export default Board