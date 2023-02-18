import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--back-marvel--d7tgfjtm8844.code.run/comics"
        );
        console.log("response >>>", response.data.response);
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
    </div>
  );
};

export default Comics;
