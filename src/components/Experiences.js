import "./Experiences.css";
const Experiences = (item) => {
  return (
    <div className="experiences">
      <h2 className="experience-title">{item.title}</h2>
      <p className="experience-role">{item.role}</p>
      <p className="experience-date">{item.date}</p>
    </div>
  );
};
export default Experiences;
