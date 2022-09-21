import "./AboutMe.css";
import resume from "./docs/Tszfai_Choy_Resume.pdf";
const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="description">
        <p>
          My name is Tszfai and I am currently specializing in web based technologies like React.js and am excited to learn about fields outside of web development. I am seeking opportunities to further build upon my abilities and to expand my skill set. 
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
