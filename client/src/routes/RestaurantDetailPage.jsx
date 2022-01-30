import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import AddReview from "../components/AddReview";
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
        setselectedRestaurant(response.data.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className="text-center">
            <StarRating rating={selectedRestaurant.restaurant.average_rating} />
            <span className="text-warning ml-1">
              (
              {selectedRestaurant.restaurant.count
                ? `${selectedRestaurant.restaurant.count}`
                : "0 reviews"}
              )
            </span>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview></AddReview>
        </>
      )}
    </div>
  );
}

export default RestaurantDetailPage;
