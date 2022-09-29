import React from 'react'
import "./Modal.css"

function Modal() {
  return (
    <div id="startModal" className='modal'>
        <div className="modal-header">Welcome to Happy Worm!</div>
        <div className="modal-body">
            <p>You get to play as Bartholomew, The Happy Worm! The consumption of the love is the only thing that makes him happy. The happier Bartholomew is, the longer he gets!</p>
            <br></br>
            <p>Enjoy your journey as a carefree worm, searching for happiness whilst unwittingly devoiding the world of love.</p> 
        </div>
        <button data-close-button className="close-button"></button>
    </div>
  )
}

export default Modal