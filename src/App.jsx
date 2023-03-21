import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Buttons from "./components/Buttons";

import { BrowserRouter as Router, Route, Routes , Link } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/" element={<Text />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
