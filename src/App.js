import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Main from "./components/main.js";  
import "./App.css";
import Dashboard from  "./plannerFrontend/pages/Dashboard"
import Register from "./plannerFrontend/pages/Register"
import Login from "./plannerFrontend/pages/Login"
import ErrorPage from "./components/ErrorPage.js"
function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Main></Main>}></Route>
    <Route path="/js30"> </Route>
    <Route path ="/planner" element={<Dashboard></Dashboard>}></Route>
    <Route path ="/register" element={<Register></Register>}></Route>
    <Route path ="/login" element={<Login></Login>}></Route>
    <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
  </Routes>
</Router>
  );
}

export default App;
