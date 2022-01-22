import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
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
    </RestaurantsContextProvider>
  );
};

// function App() {
//   return <div className="App">App</div>;
// }

export default App;
