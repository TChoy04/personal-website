import "./header.css";
import SocialIcons from "./socials.js";
import AboutMe from "./AboutMe.js";
const MyHeader = () => {
  return (
    <header>
    <div className="image-socials">
      <img
        id="displayedImage"
        src="https://dummyimage.com/300.png/09f/fff"
        alt="Tszfai"
      ></img>
      <div className="myInfo">
        <h1>Tszfai Choy</h1>
        <h3>Full-Stack Developer</h3>
        <SocialIcons></SocialIcons>
      </div>
</div>
    <AboutMe/>
    </header>
  );
};
export default MyHeader;
