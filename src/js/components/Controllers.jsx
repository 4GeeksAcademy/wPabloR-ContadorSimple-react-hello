import React from "react";

const Controllers = ({ onStop, onReset, onResume }) => {
    return (
        <div>
            <button type="button" className="btn btn-outline-warning mx-3" onClick={onStop}>Stop</button>
            <button type="button" className="btn btn-outline-warning mx-3" onClick={onReset}>Reset</button>
            <button type="button" className="btn btn-outline-warning mx-3" onClick={onResume}>Resume</button>
        </div>
    );
};

export default Controllers