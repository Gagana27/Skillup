import React from "react";
import ReactDOM from "react-dom";
import ReactStarRating from "react-star-ratings-component";

function StarRating() {
    return (
        <ReactStarRating
            numberOfStar={5}
            numberOfSelectedStar={2}
            colorFilledStar="red"
            colorEmptyStar="black"
            starSize="20px"
            spaceBetweenStar="10px"
            disableOnSelect={false}
            onSelectStar={val => {
                console.log(val);
            }}
        />
    );
}

export default StarRating;