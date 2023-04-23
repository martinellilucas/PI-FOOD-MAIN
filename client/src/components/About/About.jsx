import style from "./About.module.css";
import image from "../../assets/images/foto.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={style.view}>
      <h1 className={style.title}>About</h1>
      <div className={style.container}>
        <img src={image} alt="foto" className={style.image} />
        Hi! My name is Lucas Martinelli, i'm a full-stack developer. This
        proyect has been developed during the Henry's individual proyect
        instance. I present myself as a flexible and resilient person. I have
        the capacity for teamwork, problem solving, decision making, adaptation
        to change and continuous learning. Also, I am tolerant of pressure
        situations. I am looking for a new job challenge where I can apply my
        knowledge in the Systems area, having the opportunity to develop myself
        personally and professionally, fulfilling my tasks satisfactorily and
        expanding my qualities as a developer.
        <div className={style.linkContainer}>
          <Link className={style.link} to="https://github.com/martinellilucas">
            GitHub
          </Link>
          <Link
            className={style.link}
            to="https://www.linkedin.com/in/martinellilucas8/"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
