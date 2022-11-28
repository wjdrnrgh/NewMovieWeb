import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import "./styles.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        ></Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
