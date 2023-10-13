import React from "react";

function ReviewComp({ reviews }) {
  return (
    <div>
      <h2>Reviews:</h2>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewComp;