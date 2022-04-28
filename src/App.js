import MyHeader from "./components/MyHeader.js";
import "./App.css";
import ProjectContainer from "./components/ProjectContainer.js";
import ExperienceContainer from "./components/ExperienceContainer.js"
function App() {
  return (
    <div className="wrapper">
      <MyHeader />
  <ProjectContainer/>
<ExperienceContainer/>
    </div>
  );
}

export default App;
