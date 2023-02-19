import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ name, setName }) => {
  const [marvelInfos, setMarvelInfos] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const RESULTS_PER_PAGE = 50;
  console.log(name);

  useEffect(() => {
    const fetchData = async () => {
      let filters = "";
      if (name) {
        console.log("name dans page home", name);
        filters = filters + "&name=" + name;
      }
      try {
        const response = await axios.get(
          "https://site--back-marvel--d7tgfjtm8844.code.run/characters" +
            filters
        );
        console.log("filters page home", filters);
        console.log("response >>>", response.data.response);
        setMarvelInfos(response.data.response);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, [name]);

  // Calculer l'indice de début et de fin pour la page actuelle => 100 annonces affichées
  const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
  const endIndex = currentPage * RESULTS_PER_PAGE;

  // Filtrer les résultats à afficher en fonction de la page actuelle je slide entre 0 et 100
  console.log("marvels-infos >>>", marvelInfos);
  const filteredMarvelInfos = marvelInfos.slice(startIndex, endIndex);
  // setMarvelInfos(filteredMarvelInfos);

  return isLoading ? (
    <div>En cours de chargement</div>
  ) : (
    <div className="container">
      <div className="hero">
        <h1>Personnages Marvel</h1>
        <div>
          <div className="cards">
            {marvelInfos.map((characters, index) => {
              console.log("charcaters >>>>", characters);
              return (
                <Link
                  className="charactersFile"
                  to={"/comics/" + characters._id}
                  key={characters.id}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="herosInfos">
                    <img
                      alt={characters.name + "'s potrait"}
                      src={
                        characters.thumbnail.path +
                        "/standard_xlarge." +
                        characters.thumbnail.extension
                      }
                    />
                    <h2>{characters.name}</h2>
                    <div>
                      <p>{characters.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Précédent
          </button>
          {/* rappel math.ceil pour arrondir au nombre entier sup ou inférieur */}
          <span>
            Page {currentPage} sur{" "}
            {Math.ceil(marvelInfos.length / RESULTS_PER_PAGE)}
          </span>
          <button
            disabled={
              currentPage === Math.ceil(marvelInfos.length / RESULTS_PER_PAGE)
            }
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
