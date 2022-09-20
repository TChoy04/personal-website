import {FaHome, FaSignInAlt, FaSignOutAlt, FaUser, FaClipboardList} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import "../../App.css"
import { useSelector,useDispatch } from "react-redux";
import {logout,reset} from '../features/auth/authSlice'
function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.auth)
    const onLogout = () =>{
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
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
            {
            user ? 
            <li>
                <button className="btn" onClick={onLogout}></button>
                <FaUser></FaUser>
                    <p>Register</p>
                
            </li> :             
            <li>
            <Link to="/login">
            <FaSignOutAlt></FaSignOutAlt>
                    <p>Login</p>
                </Link>
            </li>
            }
            <li>
                <Link to="/planner">
                    <FaClipboardList></FaClipboardList>
                    Planner
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header