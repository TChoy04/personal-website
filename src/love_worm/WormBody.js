import React from 'react'
//Size of squares.
const multi = 8;
function WormBody(props) {
  return (
    <div>
        {props.wormBody.map((body,i)=>{
            const style = {
                left:`${body[0]*multi}%`,
                top:`${body[1]*multi}%`,
            }
            return(<div className="worm-body" style={style} key ={i}
            
            ></div>)
        })}
    </div>
  )
}

export default WormBody