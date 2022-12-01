import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Nav from "./components/Nav";
import Detail from "./routes/Detail";
import Genre from "./routes/Genre";
import Home from "./routes/Home";
import "./styles.css";

function App() {
  return (
    <RecoilRoot>
      <Router basename={process.env.PUBLIC_URL}>
        <Nav />
        <Routes>
          <Route
            basename={process.env.PUBLIC_URL}
            path="/movie/:id"
            element={<Detail />}
          ></Route>
          <Route
            basename={process.env.PUBLIC_URL}
            path="/page/:genre/:num"
            element={<Genre />}
          ></Route>
          <Route
            basename={process.env.PUBLIC_URL}
            path="/"
            element={<Home />}
          ></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
