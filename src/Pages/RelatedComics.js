import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RelatedCommics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [charactersComics, setCharactersComics] = useState("");

  const params = useParams();
  console.log("params >>>", params);
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--back-marvel--d7tgfjtm8844.code.run/comics/" + { id }
        );
        console.log("response >>>", response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, []);
  return <div>personnage + comics dans lequel il apparaît</div>;
};

export default RelatedCommics;
