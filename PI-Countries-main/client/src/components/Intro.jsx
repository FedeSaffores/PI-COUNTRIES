import { Link } from "react-router-dom";
import react from "react";

const Intro = () => {
  return (
    <div>
      <button className="Intro">
        <Link to="/countries" className="btnIntro">
          Intro
        </Link>
      </button>
    </div>
  );
};
export default Intro;
