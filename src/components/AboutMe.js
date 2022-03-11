import "./AboutMe.css";
import resume from "./docs/Resume.pdf";
const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="description">
        <p>Hello! My name is Tszfai.</p>
        <p>
          I strive to create websites with responsive and intuitive UX/UI and I
          have a serious passion for developing easy to access and visually
          appealing websites with a mobile first approach.
        </p>
        <p>
          If you would like to get in contact with me, my social links are right
          above and you can expect a response within 24 hours.
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
