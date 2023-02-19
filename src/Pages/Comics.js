import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comicsInfos, setComicsInfos] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--back-marvel--d7tgfjtm8844.code.run/comics"
        );

        const sortedComicsInfos = response.data.response.results.sort((a, b) =>
          a.title.localeCompare(b.title)
        );

        setComicsInfos(sortedComicsInfos);

        // const users = await User.find().sort({ name: 'asc' }); ne fonctionne pas car tableau
        // console.log("response >>>", response.data.response.results);
        // setComicsInfos(response.data.response.results);

        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement </div>
  ) : (
    <div>
      <div className="container">
        <div className="hero">
          <h1>LES COMICS MARVEL</h1>
          <div>
            <div className="cards">
              {comicsInfos.map((comics, index) => {
                return (
                  <div className="charactersFile">
                    <div className="herosInfos" key={comics._id}>
                      <img
                        src={
                          comics.thumbnail.path +
                          "/standard_xlarge." +
                          comics.thumbnail.extension
                        }
                        alt={comics.title + "'s cover"}
                      />
                      <h2>{comics.title}</h2>
                      <div>
                        <p>{comics.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comics;
