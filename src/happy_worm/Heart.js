import React from 'react'
//Size of squares.
const multi = 5;
function Heart(props) {
    const style = {
        left:`calc(${props.heart[0]*multi}% + 11px)`,
        top:`calc(${props.heart[1]*multi}% + 13px)`,
    }
  return (
    <div className="heart" style={style}></div>
  )
}

export default Heart