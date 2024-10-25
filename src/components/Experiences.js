import { useEffect } from "react";
import "./Experiences.css";
const Experiences = (item) => {
  // useEffect(() => {
  //   if (item.title == "Johnson & Johnson") {
  //     const jnj = document.getElementById(`${item.title}`);
  //     jnj.classList.add("logo");
  //   }
  // }, []);
  return (
    <div className="experiences">
      <h2 id={`${item.title}`} className="experience-title">
        {item.title}
      </h2>
      <p className="experience-role">{item.role}</p>
      <p className="experience-date">{item.date}</p>
    </div>
  );
};
export default Experiences;
