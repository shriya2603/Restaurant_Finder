import React from "react";
import StarRating from "./StarRating";

function Reviews() {
  return (
    <div className="row row-cols-3 mb-2">
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span></span>
          <span>
            <StarRating rating={3}></StarRating>
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">This restaurant is good </p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
