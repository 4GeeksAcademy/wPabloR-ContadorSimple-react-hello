import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Home = (props) => {
  return (
     <div className="number-box rounded-3 d-flex justify-content-center align-items-center p-5 mx-2">
      <FontAwesomeIcon className="text-white fs-2" icon={props.icon} />
    </div>
  );
};

Home.propTypes = {
  icon: PropTypes.object.isRequired
};

export default Home;
