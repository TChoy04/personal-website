import "./header.css";
import SocialIcons from "./socials.js";

const MyHeader = () => {
  return (
    <header>
      <img
        id="displayedImage"
        src="https://dummyimage.com/300.png/09f/fff"
        alt="Tszfai"
      ></img>
      <div className="myInfo">
        <h1>Tszfai Choy</h1>
        <h3>Front-End Developer</h3>
        <SocialIcons></SocialIcons>
      </div>
    </header>
  );
};
export default MyHeader;
