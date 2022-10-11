import "./AboutMe.css";
import resume from "./docs/Tszfai_Choy_Resume.pdf";
const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="description">
        <p>
          My name is Tszfai and I am currently majoring in Software Engineering at the Rochester Institute of Technology. I have a strong passion for web development, data structures, algorithms and problem solving and I'm always excited to learn more.
        </p>
        <p>
          If you would like to get in contact with me, you can do so via email
          at <strong>tszfai04@gmail.com</strong> or direct messages on any of my socials listed above.
        </p>
        <a
          className="resume hover-link"
          href={resume}
          target="_blank"
          type="application/pdf"
          rel="noopener noreferrer"
        >
          Resume Link
        </a>
      </div>
      
    </div>
  );
};
export default AboutMe;
