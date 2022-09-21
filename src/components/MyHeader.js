import "./MyHeader.css";
import SocialIcons from "./socials.js";
import AboutMe from "./AboutMe.js";
import "../App.css"
import Tszfai from "./images/Tszfai_Choy_Headshot.jpg";
const MyHeader = () => {
  return (
    <header>
      <div className="image-socials">
        <img
          id="displayedImage"
          src={Tszfai}
          alt="Tszfai"
        ></img>
 
        <div className="myInfo">
          <h1>Tszfai Choy</h1>
          <h3>Software Engineer</h3>
          <SocialIcons></SocialIcons>
        </div>
      </div>
      <AboutMe />
    </header>
  );
};
export default MyHeader;
