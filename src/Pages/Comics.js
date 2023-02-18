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
        // console.log("response >>>", response.data.response.results);
        setComicsInfos(response.data.response.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>MARVEL'S COMICS</h1>
      <div>
        {comicsInfos.map((comics, index) => {
          return (
            <div key={comics._id}>
              <img
                src={
                  comics.thumbnail.path +
                  "/portrait_medium." +
                  comics.thumbnail.extension
                }
                alt={comics.title + "'s cover"}
              />
              <p>{comics.title}</p>
              <p>{comics.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
