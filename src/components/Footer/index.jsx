import "./style.css";
const Footer = () => {
    return (
        <footer>
      <a
        href="https://www.linkedin.com/in/keiran-patel-73650120b/"
        target="_blank"
      >
        <img
          src="Linkd.png"
          alt="LinkIn-icon"
        />
      </a>

      <a
        href="https://github.com/Keiran-Patel"
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/download.png`}
          alt="Github-icon"
        />
      </a>
    </footer>
  );
};

export default Footer;
