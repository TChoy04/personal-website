import {FaHome, FaSignInAlt, FaSignOutAlt, FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import "../../App.css"
function Header() {
  return (
    <header className="header">
        <div className="logo">
            <Link to="/">Tszfai.dev/</Link>
        </div>
        <ul>
            <li>
                <Link to="/register">
                <FaUser></FaUser>
                    <p>Register</p>
                </Link>

            </li>
            <li>
            <Link to="Login">
            <FaSignInAlt></FaSignInAlt>
                    <p>Login</p>
                </Link>
            </li>
            <li>
                <Link to="planner">
                    <FaHome></FaHome>
                    Home
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header