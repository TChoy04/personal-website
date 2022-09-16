import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Main from "./components/main.js";  
import "./App.css";
import Planner from  "./planner/Planner"
import ErrorPage from "./components/ErrorPage.js"
function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Main></Main>}></Route>
    <Route path="/js30"> </Route>
    <Route path ="planner" element={<Planner></Planner>}></Route>
    <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
  </Routes>
</Router>
  );
}

export default App;
