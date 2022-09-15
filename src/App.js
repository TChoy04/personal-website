import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Main from "./components/main.js";
import "./App.css";
function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Main></Main>}></Route>
    <Route path="/js30"> </Route>
  </Routes>
</Router>
  );
}

export default App;
