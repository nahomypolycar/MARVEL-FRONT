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
      <button>Comics</button>
      <button>Favoris</button>
    </div>
  );
};

export default Header;
