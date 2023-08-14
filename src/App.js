import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetailsPage from "./Components/MovieDetailsPage";
import HomePage from "./Components/HomePage";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Movie App</h1>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="newpage/:id/:title/:description"
          element={<MovieDetailsPage />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
