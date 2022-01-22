import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]); // Initially it would be an empty array
  return (
    <RestaurantsContext.Provider
      value={{ restaurants: restaurants, setRestaurants: setRestaurants }} // these two will be passed to all commponents so that they can update their restaurant list
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};
