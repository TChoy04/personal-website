import React from 'react'
//Size of squares.
const multi = 8;
function Heart(props) {
    const style = {
        left:`calc(${props.heart[0]*multi}% + 16px)`,
        top:`calc(${props.heart[1]*multi}% + 16px)`,
    }
  return (
    <div className="heart" style={style}></div>
  )
}

export default Heart