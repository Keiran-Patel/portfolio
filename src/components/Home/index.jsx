import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Keiran</p>
          <p> Software Engineer Student</p>
        </h1>
        <Link to="/about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/1.png`} //reduce image size 
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;

