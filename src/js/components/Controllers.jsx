import React from "react";

const Controllers = ({ onStop, onReset, onResume, onStartCountDown }) => {
     const handleCountDown = () => {
        const input = document.getElementById("countDownInput");
        const value = parseInt(input.value, 10);
        if (!isNaN(value) && value >= 0) {
            onStartCountDown(value);
        } else {
            alert("Por favor, introduce un número válido.");
        }
    };

    return (
        <div className="my-2">
            <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-outline-warning mx-3" onClick={onStop}>Stop</button>
            <button type="button" className="btn btn-outline-warning mx-3" onClick={onReset}>Reset</button>
            <button type="button" className="btn btn-outline-warning mx-3" onClick={onResume}>Resume</button>
            </div>
            <div className="mt-4">
                <label className="text-white mx-2">Cuenta atrás desde:</label>
                <input type="number" id="countDownInput" ></input>
                <button type="button" className="btn btn-outline-danger mx-3" onClick={handleCountDown}>Start Countdown</button>
            </div>
        </div>

    );
};

export default Controllers