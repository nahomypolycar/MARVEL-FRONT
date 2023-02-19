import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RelatedComics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comicsCharacters, setComicsCharacters] = useState("");

  const params = useParams();
  console.log("params", params);
  const { characterid } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--back-marvel--d7tgfjtm8844.code.run/related-comics/${characterid}`
        );
        console.log("response characterId >>>", response.data);
        setComicsCharacters(response.data);
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
      <h1>COMICS RELATED TO CHARACTERS</h1>
    </div>
  );
};

export default RelatedComics;
