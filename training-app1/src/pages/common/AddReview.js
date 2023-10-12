import React from "react";

const ReviewComp = props => {
    let limit = props.limit || 5;
    const [initialValue, setInitialValue] = React.useState(
        props.currentValue || 2
    );

    const handleClick = event => {
        console.log("single click");
        setInitialValue(+event.target.getAttribute("data"));
        if (props.callback) {
            props.callback(+event.target.getAttribute("data"));
        }
    };

    const handleDoubleClick = event => {
        if (+event.target.getAttribute("data") === 1) {
            setInitialValue(0);
            if (props.callback) {
                props.callback(+event.target.getAttribute("data"));
            }
        }
    };

    return (
        <div onClick={handleClick} onDoubleClick={handleDoubleClick}>
            {[...new Array(limit).keys()].map(param => (
                <span
                    key={param}
                    data={param + 1}
                    className={param < initialValue ? "star rated" : "star"}
                />
            ))}
        </div>
    );
};

export default ReviewComp;