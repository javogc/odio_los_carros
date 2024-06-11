import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homeContainer">
      <div>
        <div>
          <h4>
            Hey there! I'm <b>Javier Guajardo</b>, a full-stack web developer
            based in Mexico City with a knack for crafting impactful digital
            experiences. Currently freelancing,{" "}
            <b>
              I specialize in building intuitive data dashboards, interactive
              maps, and a wide range of custom web applications{" "}
            </b>{" "}
            that empower users with insights and engage them on a deeper level.
            Passionate about user-centric design and continuous learning, I
            thrive on collaborating closely with clients to bring their visions
            to life. <br></br>
            <br></br>My{" "}
            <Link to="/projects" className="homeLink">
              portfolio{" "}
            </Link>
            showcases a diverse range of projects, each reflecting my commitment
            to creativity, functionality, and seamless user experiences. While
            I'm dedicated to freelance work, I'm also keen on exploring new
            opportunities where I can contribute my skills to innovative teams.
            If you're seeking a reliable partner for your next project or a
            dynamic developer to join your team, let's connect and explore the
            possibilities. Let's make something extraordinary together.{" "}
            <br></br>
            <br></br>
            <a className="homeLink" href="mailto:javiergc93@gmail.com">
              Reach out
            </a>
            {""}, and let's turn your ideas into reality!
          </h4>
        </div>
      </div>

      {/* {language === "en" && (
        <div>
          <div>
            <h1>Javier Guajardo</h1>
            <h2>I'm updating this website</h2>
            <h5>Coming soon: projects section</h5>
          </div>
          <div>
            <h5>
              For inquiries or invoices:{" "}
              <a className="homeLink" href="mailto:javiergc93@gmail.com">
                Contact Me
              </a>
            </h5>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default HomePage;
