import Header from "../components/Header"
import {useState,useEffect} from "react"
import {FaSignInAlt} from "react-icons/fa"
import {useSelector, useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import {FaUser} from "react-icons/fa"
import {login,reset} from "../features/auth/authSlice.js"
import Spinner from "../components/Spinner"
function Login() {
  const [formData,setFormData] = useState({

    email:"",
    password:"",
  });
  const {email,password} = formData;
  const onChange = (e) =>{
      setFormData((prevState)=>({
        ...prevState, [e.target.name] : e.target.value,
      }))
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user,isLoading,isError,isSuccess,message} = useSelector((state)=>state.auth);
  const onSubmit = (e)=>{
    e.preventDefault(); 
    const userData = {
      email,password
    }
    dispatch(login(userData));
  }
  useEffect(()=>{
    if(isError) {
      toast.error(message)
    }
    if(isSuccess || user){
      navigate('/');
    }
    dispatch(reset());

  },[user,isError,isLoading,isSuccess,navigate,dispatch,message])

  if(isLoading){
    return <Spinner></Spinner>
  }
  return (
    <>
      <Header></Header>
      
      <section className="heading">
        <h1 className="reg-black">
          <FaSignInAlt></FaSignInAlt><span>Login</span>
        </h1>
        <p>Welcome back!</p>
      </section>
      <section className="form"><form>
        <div className="form-group">
        <input type ="text" className="form-control" name="email" id="email" value={email} placeholder="Please enter your email" onChange={onChange}></input>
        </div>
        <div className="form-group">
        <input type ="password" className="form-control" name="password" id="password" value={password} placeholder="Please enter your password" onChange={onChange}></input>
        </div>

        <div className="form-group">
          <button type="submit" className="btn-block btn-flip" data-back="Submit"data-front="Submit"></button>
        </div>
        </form></section>
      </>
  )
}

export default Login