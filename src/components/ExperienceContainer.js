import Experiences from "./Experiences.js";
const ExperienceContainer = () => {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <h1 className="experience-heading">
        Experience
        </h1>
        <p className="experience-heading-description">
          Organizations I've worked with.
        </p>
      </div>
      <div className="flex-divider">
        <div className="split-exp">
          <Experiences
            title="International Socioeconomics Laboratory"
            role="Board of Directors - Web Development"
            date="June 2020 - February 2022"
          />
          <Experiences
            title="Finxerunt Policy Institute"
            role="Web Developer"
            date="June 2020 - January 2022"
          />
        </div>
        <div className="split-exp">
          <Experiences
            title="STEM from Scratch"
            role="Writer + Editor"
            date="March 2021 - March 2022"
          />
          <Experiences
            title="Brooklyn Public Library"
            role="Technical Support Internship"
            date="September 2019 - May 2020"
          />
        </div>
      </div>
    </div>
  );
};
export default ExperienceContainer;
