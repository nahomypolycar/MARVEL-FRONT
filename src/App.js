import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Comics from "./Pages/Comics";
import RelatedCommics from "./Pages/RelatedComics";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="bckimg">
      <Router>
        <Header name={name} setName={setName} />
        <Routes>
          <Route
            path="/home"
            element={<Home name={name} setName={setName} />}
          />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:characterId" element={<RelatedCommics />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
