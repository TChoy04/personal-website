import MyHeader from "./components/MyHeader.js";
import ProjectContainer from "./components/ProjectContainer.js";
import ExperienceContainer from "./components/ExperienceContainer.js";


const Main = () =>{
    return <div className="wrapper">
      <MyHeader />
  <ProjectContainer/>
<ExperienceContainer/>
    </div>
}
export default Main;