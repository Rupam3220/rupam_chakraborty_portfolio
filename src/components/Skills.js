import React from "react";
import "../styles/skils.css";
import frontend from "../assets/frontendDev.png";
import backend from "../assets/backendDev.png";
import databse from "../assets/databse.png"

const Skills = () => {
  return (
    <>
      <section id="skills">
        <span className="skillTitle">My Skills</span>
        <span className="skillDesc">
          A Valuable team player with a passion for building cutting-edge
          software solutions. With a strong foundation in Javascript, Express
          JS, and React JS, I thrive in dynamic environments where innovation
          meets functionality. I am deeply committed to staying updated with the
          latest trends and technologies in development and engaging in
          collaborative learning with peers, I am always seeking opportunities
          to expand my knowledge and skill set
        </span>

        <div className="skillBars">
          <div className="skillBar">
            <img src={frontend} alt="frontendDevelopment" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>Frontend Development</h2>
              <p>Proficient in ReactJS, HTML, CSS, Bootstrap, Material-UI, SCSS, Template engine</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={backend} alt="backendDevelopment" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>Backend Development</h2>
              <p>Proficient in ExpressJS, REST API, CORS, JWT, Password Hashing and salting, Database Connection</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={databse} alt="backendDevelopment" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>Database</h2>
              <p>Proficient in MongoDB</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
