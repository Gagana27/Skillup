import React from "react";
import ReactDOM from "react-dom";
import ReactStarRating from "react-star-ratings-component";

function StarRating({ selectedRating, onStarClick }) {
    return (
        <ReactStarRating
            rating={selectedRating}
            numberOfStar={5}
            colorFilledStar="red"
            colorEmptyStar="black"
            starSize="30px"
            spaceBetweenStar="10px"
            onSelectStar={onStarClick}
            disableOnSelect={false}
        />
    );
}

export default StarRating;