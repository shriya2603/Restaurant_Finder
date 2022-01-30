import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Reviews from "./Reviews";
import RestaurantsFinder from "../apis/RestaurantFinder";

function AddReview() {
  const { id } = useParams();
  const history = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantsFinder.post(`/${id}/addReview`, {
        name: name,
        rating: rating,
        review: reviewText,
      });
      // console.log(response.data.data.review);
      // console.log(location.pathname);
      history("/");
      history(location.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              className="custom-select"
            >
              <option disabled> Rating </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id="Review"
            className="form-control"
          ></textarea>
        </div>
        <button onClick={handleSubmitReview} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddReview;
