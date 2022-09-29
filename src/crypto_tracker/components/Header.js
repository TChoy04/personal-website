import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import {FaBitcoin} from "react-icons/fa"
import {GiSandSnake} from "react-icons/gi"
function Header() {
  return (
    < div className="crypto-header">
        <div className="logo">
            <Link className = "no_line coin-hover" to="/">Tszfai.dev/</Link>
        </div>
        <div>
            <ul className="navbar-links">
            <Link className ="no_line coin-hover" to="/crypton">
                <li className = "nav-item">
                    <FaBitcoin></FaBitcoin> <span>Crypton</span>
                </li>
                </Link>
                <Link className ="no_line coin-hover" to="/worm">
                <li className = "nav-item">
                    <GiSandSnake></GiSandSnake> <span>Happy Worm</span>
                </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Header