import "./AboutMe.css";
import resume from "./docs/Tszfai_Choy_Resume_Updated_4_28_2022.pdf";
const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="description">
        <p>
          My name is Tszfai and I strive to create websites with responsive and
          intuitive UX/UI and I have a serious passion for developing easy to
          access and visually appealing websites with a mobile first approach.
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
        <a href="/register">Go</a>
      </div>
      
    </div>
  );
};
export default AboutMe;
