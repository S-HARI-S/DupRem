import Text from "./Text";
import Buttons from "./Buttons";

import { BrowserRouter as Router, Route, Routes , Link } from "react-router-dom";

export default function HMM() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/" element={<Text />} />
        </Routes>

      </Router>
    </>
  );
}
