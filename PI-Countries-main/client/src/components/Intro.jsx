import { Link } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
  return (
    <div>
      <Link to="/countries" className="btnIntro">
        Intro
      </Link>
    </div>
  );
};
export default Intro;
