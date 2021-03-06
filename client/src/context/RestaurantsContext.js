import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]); // Initially it would be an empty array
  const [selectedRestaurant, setselectedRestaurant] = useState(null); // Initially it would be an empty object i.e null

  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: restaurants,
        setRestaurants: setRestaurants,
        addRestaurants: addRestaurants,
        selectedRestaurant: selectedRestaurant,
        setselectedRestaurant: setselectedRestaurant,
      }} // these two will be passed to all commponents so that they can update their restaurant list
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};
