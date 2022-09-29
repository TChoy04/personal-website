import React from 'react'
//Size of squares.
const multi = 5;
//Copied from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function getRandomColor(){
  return "hsla(" + ~~(360 * Math.random()) + "," +
                  "70%,"+
                  "80%,1)"
}

function WormBody(props) {
    
  return (
    <>
        {props.wormBody.map((body,i)=>{
            let color= getRandomColor();
            const style = {
                left:`${body[0]*multi}%`,
                top:`${body[1]*multi}%`,
                background: `${color}`
            }
            return(<div className="worm-body" style={style} key ={i}
            ></div>)
        })}
    </>
  )
}

export default WormBody