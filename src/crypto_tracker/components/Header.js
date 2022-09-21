import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import {FaBitcoin} from "react-icons/fa"
function Header() {
  return (
    < div className="crypto-header">
        <div className="logo">
            <Link className = "no_line coin-hover" to="/">Tszfai.dev/</Link>
        </div>
        <div>
            <ul>
            <Link className ="no_line coin-hover" to="/crypton">
                <li className = "nav-item">
                    <FaBitcoin></FaBitcoin> <span>Crypton</span>
                </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Header