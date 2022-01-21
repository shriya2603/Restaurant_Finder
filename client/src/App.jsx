import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/restaurants/:id/update"
            element={<UpdatePage />}
          />
          <Route
            exact
            path="/restaurants/:id"
            element={<RestaurantDetailPage />}
          />
        </Routes>
      </Router>
    </div>
  );
};

// function App() {
//   return <div className="App">App</div>;
// }

export default App;
