import React from "react";
import "../styles/experience.css";
import wipro from "../assets/wipro.png";

const Experience = () => {
  return (
    <>
      <section id="experience">
        <span className="expTitle">Experience</span>
        <div className="expBars">
          <div className="expBar">
            <img src={wipro} alt="frontendDevelopment" className="expBarImg" />
            <div className="expBarText">
              <h2>Wipro limited</h2>
              <p>Project Engineer, Developer - L1</p>
              <p>Feb, 2022 - Present</p>
              <p>
                Worked on Implementation project: CISCO as Project Engineer.
                Played as a team member and worked as a Full Stack Developer,
                where I used JavaScript, and Express and React for development,
                BitBucket for source control, and Jira for planning and
                tracking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
