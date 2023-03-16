import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RelatedComics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comicsCharacters, setComicsCharacters] = useState(null);

  const params = useParams();
  console.log("params", params);
  const { characterId } = params;
  console.log("characterId >>>>", characterId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--back-marvel--d7tgfjtm8844.code.run/comics?characterId=${characterId}`
        );
        //
        console.log("response characterId >>>", response.data);
        setComicsCharacters(response.data);
        console.log(comicsCharacters);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  });

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>COMICS RELATED TO CHARACTERS</h1>
    </div>
  );
};

export default RelatedComics;
