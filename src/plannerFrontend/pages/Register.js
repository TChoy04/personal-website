import Header from "../components/Header"
import {useState,useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import {FaUser} from "react-icons/fa"
import {register,reset} from "../features/auth/authSlice.js"
import Spinner from "../components/Spinner"
function Register() {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
  });
  const {name,email,password,confirmPassword} = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user,isLoading,isError,isSuccess,message} = useSelector((state)=>state.auth);
  useEffect(()=>{
    if(isError) {
      toast.error(message)
    }
    if(isSuccess || user){
      navigate('/');
    }
    dispatch(reset());

  },[user,isError,isLoading,isSuccess,navigate,dispatch,message])
  const onChange = (e) => {

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    if(password!==confirmPassword){
      toast.error("Passwords do not match.");
    }else{
      const userData = {name,email,password};
      dispatch(register(userData));
    }
  }
  if(isLoading){
    return <Spinner></Spinner>
  }
  return (
    <>
      <Header></Header>
      <section className="heading">
        <h1 className="reg-black">
          <FaUser></FaUser> <span>Register</span>
        </h1>
        <p>Please create an account.</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
        <div className="form-group">
        <input type ="text" className="form-control" id="name" name="name" value={name} placeholder="Please enter your name" onChange={onChange}></input>
        </div>
        <div className="form-group">
        <input type ="email" className="form-control" id="email" name ="email"value={email} placeholder="Please enter your email" onChange={onChange}></input>
        </div>
        <div className="form-group">
        <input type ="password" className="form-control" id="password" name="password" value={password} placeholder="Please enter your password" onChange={onChange}></input>
        </div>
        <div className="form-group">
        <input type ="password" className="form-control" name =  "confirmPassword" id="confirmPassword" value={confirmPassword} placeholder="Confirm password." onChange={onChange}></input>
        </div>
        <div className="form-group">
          <button type="submit" className="btn-block btn-flip" data-back="Submit"data-front="Submit"></button>
        </div>
        </form></section>
        <ToastContainer></ToastContainer>
      </>
  )
}

export default Register