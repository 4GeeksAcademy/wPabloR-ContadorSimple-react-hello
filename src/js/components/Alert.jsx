import React from "react";

const Alert = () =>{

    const handleChange = (event) =>{
        window.limit = parseInt(event.target.value);
    }

    return(
        <div>
            <label className="text-white mx-2">Ingresa el tiempo límite:</label>
            <input typeof="number" onChange={handleChange}></input>
        </div>

    );
};

export default Alert;