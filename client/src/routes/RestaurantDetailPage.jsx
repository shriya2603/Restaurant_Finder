import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import Reviews from "../components/Reviews";
import StarRating from "../components/StarRating";
import { RestaurantsContext } from "../context/RestaurantsContext";

function RestaurantDetailPage() {
  const { id } = useParams();
  const { selectedRestaurant, setselectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await RestaurantFinder.get(`/${id}`);
        setselectedRestaurant(response.data.data.restaurant);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      {selectedRestaurant && selectedRestaurant.name && (
        <>
          <div className="mt-3">
            <Reviews />
          </div>
        </>
      )}
    </div>
  );
}

export default RestaurantDetailPage;
