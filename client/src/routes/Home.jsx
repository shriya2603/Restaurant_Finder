import React from "react";
import AddRestaurant from "../components/AddRestaurant";
import RestaurantList from "../components/RestaurantList";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <AddRestaurant />
      <RestaurantList />
    </div>
  );
};

export default Home;
