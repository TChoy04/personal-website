import React from 'react'
import Header from "../crypto_tracker/components/Header.js"
import Board from "./Board.js"
import Modal from "./Modal.js"
function Worm() {
  return (
    <div className="stop-moving">
    <Header></Header>
    <Board></Board>
    <Modal></Modal>
    <div id="overlay"></div>
    </div>
  )
}

export default Worm