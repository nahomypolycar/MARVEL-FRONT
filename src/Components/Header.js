import { Link } from "react-router-dom";
import logo from "../assets/Pictures/Marvel_Logo.png";
import { useState } from "react";

const Header = ({ name, setName }) => {
  const [boutonActif, setBoutonActif] = useState(null);

  const handleSurvol = (id) => {
    setBoutonActif(id);
  };

  const handleSortie = () => {
    setBoutonActif(null);
  };

  console.log(boutonActif);

  return (
    <div>
      <div className="header">
        <div className="logoAndbuttons">
          <Link to="/home">
            <img src={logo} alt="Marvel's logo" className="logo" />
          </Link>
          <div className="headernav">
            <div className="headerbuttons">
              <Link to="/home" className="headerbuttons">
                <button
                  id="bouton1"
                  className={boutonActif === "bouton1" ? "survole" : "ignore"}
                  onMouseEnter={() => handleSurvol("bouton1")}
                  onMouseLeave={handleSortie}
                >
                  Personnages
                </button>
              </Link>
              <Link to="/comics" className="headerbuttons">
                <button
                  id="bouton2"
                  className={boutonActif === "bouton2" ? "survole" : "ignore"}
                  onMouseEnter={() => handleSurvol("bouton2")}
                  onMouseLeave={handleSortie}
                >
                  Comics
                </button>
              </Link>
              <button
                id="bouton3"
                className={boutonActif === "bouton3" ? "survole" : "ignore"}
                onMouseEnter={() => handleSurvol("bouton3")}
                onMouseLeave={handleSortie}
              >
                Favoris
              </button>
            </div>
          </div>
        </div>
        <div className="searchBar">
          <form>
            <input
              type="text"
              placeholder="Rechercher..."
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
