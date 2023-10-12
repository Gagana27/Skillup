import { useState } from "react";
import ReactStars from 'react-rating-star-with-type'

export default function StarRating() {
    const [star, setStar] = useState(5);

    const onChange = (nextValue) => {
        setStar(nextValue)
    }

    return (
        <ReactStars
            onChange={onChange}
            value={4.2}
            edit={true}
            activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC",]}
        />
    )
}