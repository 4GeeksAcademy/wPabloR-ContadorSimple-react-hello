import React from "react";
import PropTypes from "prop-types";


const Number = ({value}) => {
    return (
        <div className="number-box bg-dark rounded-3 d-flex justify-content-center align-items-center p-3 mx-2">
            <p className="text-white m-0 fs-1">{value}</p>
        </div>

    );
};

Number.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Number