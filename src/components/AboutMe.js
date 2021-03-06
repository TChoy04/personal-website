import "./AboutMe.css";
import resume from "./docs/Tszfai_Choy_Resume_Updated_4_28_2022.pdf";
const discord = "BLANKFORNOW";
const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="description">
        <p>
          My name is Tszfai and I strive to create websites with responsive and
          intuitive UX/UI and I have a serious passion for developing easy to
          access and visually appealing websites with a mobile first approach. I
          aim to create sturdy and scalable webpages supported by an efficient
          backend system using the MERN Stack.
        </p>
        <p>
          If you would like to get in contact with me, you can do so via email
          at <strong>tszfai04@gmail.com</strong> or direct messages on
          <strong> LinkedIn</strong> or <strong>Discord ({discord})</strong>
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
