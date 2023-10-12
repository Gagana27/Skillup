import React from "react";
import ReactDOM from "react-dom";
import ReactStarRating from "react-star-ratings-component";

function StarRating() {

    const SelectStar = (val) => {
        console.log("first",val);
    }

    return (
        <>
         <ReactStarRating
            numberOfStar={5}
            numberOfSelectedStar={2}
            colorFilledStar="orange"
            colorEmptyStar="black"
            starSize="30px"
            spaceBetweenStar="10px"
            disableOnSelect={false}
            onSelectStar={SelectStar}
         />
        </>
    );
}

export default StarRating;