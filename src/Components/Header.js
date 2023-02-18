import { Link } from "react-router-dom";
import logo from "../assets/Pictures/Marvel_Logo.png";

const Header = () => {
  return (
    <div>
      {" "}
      <Link to="/home">
        <img src={logo} alt="Marvel's logo" />
        <button>Personnages</button>
      </Link>
      <Link to="/comics">
        <button>Comics</button>
      </Link>
      <button>Favoris</button>
    </div>
  );
};

export default Header;
