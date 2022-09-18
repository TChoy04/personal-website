import Header from "../components/Header"
import {useState,useEffect} from "react"
import {FaUser} from "react-icons/fa"
function Register() {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
  });
  const {name,email,password,confirmPassword} = formData;
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
          <FaUser></FaUser> Register
        </h1>
        <p>Please create an account.</p>
      </section>
      <section className="form"><form>
        <div className="form-group">
        <input type ="text" className="form-control" id="name" value={name} placeholder="Please enter your name" onChange={onChange}></input>
        </div>
        <div className="form-group">
        <input type ="text" className="form-control" id="email" value={email} placeholder="Please enter your email" onChange={onChange}></input>
        </div>
        <div className="form-group">
        <input type ="password" className="form-control" id="password" value={password} placeholder="Please enter your password" onChange={onChange}></input>
        </div>
        <div className="form-group">
        <input type ="password" className="form-control" id="confirmPassword" value={confirmPassword} placeholder="Confirm password." onChange={onChange}></input>
        </div>
        <div className="form-group">
          <button type="submit" className="btn-block btn-flip" data-back="Submit"data-front="Submit"></button>
        </div>
        </form></section>
      </>
  )
}

export default Register