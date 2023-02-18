import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [marvelInfos, setMarvelInfos] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--back-marvel--d7tgfjtm8844.code.run/characters"
        );
        console.log("response >>>", response.data.response);
        setMarvelInfos(response.data.response);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      <h1>MARVEL'S Characters</h1>
      <div>
        <p>
          {marvelInfos.map((characters, index) => {
            console.log(
              "photo",
              characters.thumbnail.path +
                "/portrait_small." +
                characters.thumbnail.extension
            );
            return (
              <div>
                <img
                  alt={characters.name + "'s potrait"}
                  src={
                    characters.thumbnail.path +
                    "/portrait_small." +
                    characters.thumbnail.extension
                  }
                />
                <p>{characters.name}</p>
                <p>{characters.description}</p>
              </div>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Home;
