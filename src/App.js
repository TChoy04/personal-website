
import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Main from "./main.js";
import ErrorPage from "./components/ErrorPage.js"
import "./App.css";
function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Main></Main>}></Route>
    <Route path="/js30"> </Route>
    <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
  </Routes>
</Router>
  );
}

export default App;
