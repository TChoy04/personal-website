import "./pages.css";
import Header from "../components/Header";
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
function Dashboard() {
  const navigate = useNavigate()
  const {user} = useSelector((state)=>state.auth)
  useEffect(()=>{
  if(!user){
  navigate('/login')
  }
  },[user,navigate])
  return (
    <div>
      <Header></Header>
    </div>
  )
}

export default Dashboard