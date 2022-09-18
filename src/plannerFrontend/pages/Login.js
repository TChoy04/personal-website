import Header from "../components/Header"
import {useState,useEffect} from "react"
import {FaSignInAlt} from "react-icons/fa"
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

  const onSubmit = (e)=>{
    e.preventDefault();
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
        <input type ="text" className="form-control" id="email" value={email} placeholder="Please enter your email" onChange={onChange}></input>
        </div>
        <div className="form-group">
        <input type ="password" className="form-control" id="password" value={password} placeholder="Please enter your password" onChange={onChange}></input>
        </div>

        <div className="form-group">
          <button type="submit" className="btn-block btn-flip" data-back="Submit"data-front="Submit"></button>
        </div>
        </form></section>
      </>
  )
}

export default Login