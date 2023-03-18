import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HMM from "./components/HMM";

// import {
//   createBrowserRouter,
//   RouterProvider,
//   BrowserRouter as Router,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
<HMM / >
    </>
  );
}

export default App;
