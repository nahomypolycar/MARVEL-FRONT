import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Comics from "./Pages/Comics";
import RelatedCommics from "./Pages/RelatedComics";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/related-comics" element={<RelatedCommics />} />
      </Routes>
    </Router>
  );
}

export default App;
