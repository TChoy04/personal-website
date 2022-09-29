
import React,{useEffect, useState} from 'react'
import "./Board.css"
import Heart from "./Heart";
import Worm from "./WormBody.js"
import {FaSadTear} from "react-icons/fa"
//Copied from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
function randomHeartGenerator(){
    let x = randomIntFromInterval(0,19);
    let y = randomIntFromInterval(0,19);
    return [x,y]
}

let lose = false
let score = 0
let session_high = 0;
let dir = "RIGHT"
function Board() {
    let paused = false;
    const [direction,updateDirection] = useState("RIGHT");
    const [heart,updateHeart] = useState(randomHeartGenerator());
    const [wormBody, updateWormBody] = useState([
        [8,10],
        [9,10],
    ]);

    const [speed,updateSpeed] = useState(1000000)
    //Start the game || resume after a pause
    const startGame = () =>{
        updateSpeed(150)
    }
    //Resume after a lost game to remove Modal
    //Pause the game
    const pauseGame = () =>{
        updateSpeed(1000000);
    }
    
    
    const onKeyDown = (e) =>{
        //Change directions on keydown
        if((e.key==='ArrowLeft' || e.key === "a" || e.key === "A") && dir!="RIGHT"){
            updateDirection("LEFT");
            dir = "LEFT"
        }
        else if((e.key==='ArrowRight' || e.key === "d" || e.key === "D" ) && dir!="LEFT"){
            updateDirection("RIGHT");
            dir = "RIGHT"
        }
        else if((e.key==='ArrowUp' || e.key === "w" || e.key === "W") && dir!="DOWN"){
            updateDirection("UP");
            dir = "UP"
        }
        else if((e.key==='ArrowDown' || e.key === "s" || e.key === "S") && dir!="UP"){
            updateDirection("DOWN");
            dir = "DOWN"
        
        }
        if(e.code=="Space"){
            if(paused){
                startGame()
            } 
            else pauseGame()
            paused = !paused;
        }
        return "";
    }

    const moveWorm = () =>{
        let body = [...wormBody];
        let head = body[body.length-1];
        //Check what direction it's going
        if(direction==="RIGHT"){
            head = [head[0]+1,head[1]];
        }
        else if(direction==="LEFT"){
            head = [head[0]-1,head[1]];
        }
        else if(direction==="DOWN"){
            head = [head[0],head[1]+1];
        }
        else if(direction==="UP"){
            head = [head[0],head[1]-1];
        }
        //Move the worm
        body.push(head);
        body.shift();
        updateWormBody(body);
    }
    const onGameOver = () =>{
        //Set to initial state
        score = wormBody.length-2;
        session_high = Math.max(score,session_high)
        updateWormBody([
            [8,10],
            [9,10]
        ]);
        updateDirection("RIGHT");
        dir = "RIGHT";
        updateHeart(randomHeartGenerator());
        lose = true;
        pauseGame()
    }
    const checkOutOfBounds = ()=>{
        let head = wormBody[wormBody.length-1];
        if(head[0]>=20 || head[1]>=20 || head[0]<0 || head[1]<0) onGameOver();
    }
    const checkCollision = () =>{
        let body = wormBody;
        let head = body[body.length-1];
        for(let i = 0; i<body.length-1; i++){
            if(body[i][0]==head[0] && body[i][1]==head[1]) onGameOver()
        }
        }
    const grow = ()=>{
        let newWorm = [...wormBody];
        newWorm.unshift([]);
        updateWormBody(newWorm)
    }
    const onEat = () =>{
        let head = wormBody[wormBody.length-1];
        if(head[0] == heart[0] && head[1]==heart[1]){
            grow();
            updateHeart(randomHeartGenerator());
        }
    }
    
//Sets interval
    useEffect(()=>{
        const mv = setInterval(moveWorm,speed);
        checkCollision();
        checkOutOfBounds();
        onEat();
        const loseModal = document.getElementById("loseModal")
        const overlay = document.getElementById("overlay")
        if(lose){ 
            loseModal.classList.add("active")
            overlay.classList.add("active")
    }
        return () => {
            window.clearInterval(mv);
          };
        
    });
    useEffect(()=>{
        window.addEventListener("keydown",onKeyDown);
        const body = document.querySelector("body");
        const closeModalButtons = document.querySelectorAll('[data-close-button]');
        const overlay = document.getElementById("overlay");
        const startModal = document.getElementById("startModal")
        function openModal(modal){
            modal.classList.add("active")
            overlay.classList.add("active")
        }
        function closeStartModal(){
            startModal.classList.remove("active")
            overlay.classList.remove("active")
            updateSpeed(200)
       }
        openModal(startModal)
        closeModalButtons.forEach(close=>{
        close.addEventListener("click",closeStartModal)
    })
    },[])
  return (
    <>
    <div className="board">
        <Worm wormBody={wormBody}></Worm>
        <Heart heart={heart}></Heart>
    </div>
    <div id="loseModal" className={`modal `}>
        <div className="modal-header"><FaSadTear></FaSadTear> <span class="pad-left">You failed!</span></div>
        <div className="modal-body">
        <p>You let Bartholomew down!</p>
        <br></br>
        <p>Your Score: {score}</p>
        <br></br>
        <p>Session High Score: {session_high}</p>        
        </div>
        <button onClick={()=>{
            const loseModal = document.getElementById("loseModal");
            const overlay = document.getElementById("overlay")
            loseModal.classList.remove("active");
            overlay.classList.remove("active")
            startGame();
            lose = false;
        }}className="close-button lose-button"></button>
    </div>
    </>
  )
}

export default Board