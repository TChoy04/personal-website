import ProjectContainer from "./components/ProjectContainer.js";
import ExperienceContainer from "./components/ExperienceContainer.js";
import MyHeader from "./components/MyHeader.js";
import "./App.css";
const Main = () =>{
    return <div className="wrapper">
      <MyHeader />
  <ProjectContainer/>
<ExperienceContainer/>
    </div>
}
export default Main;