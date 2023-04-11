import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <p className={style.text}>
        Developed by{" "}
        <a
          className={style.link}
          href="https://www.linkedin.com/in/martinellilucas8/"
        >
          Lucas Martinelli
        </a>
      </p>
    </div>
  );
};

export default Footer;
