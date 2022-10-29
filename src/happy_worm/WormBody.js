import React from 'react'
//Size of squares.
const multi = 5;
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
            if(i===props.wormBody.length-1) return (<div className="worm-body worm-head" style={style} key ={i}
            ></div>)
            return(<div className="worm-body" style={style} key ={i}
            ></div>)
        })}
    </>
  )
}

export default WormBody