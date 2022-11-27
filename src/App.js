import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
