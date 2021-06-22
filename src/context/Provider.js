// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cars: {
  //       red: false,
  //       blue: false,
  //       yellow: false,
  //     },
  //   }
  //   this.moveCar = this.moveCar.bind(this);
  // }
  
  let [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });
  
  function moveCar(car, side) {
    setCars({
        ...cars,
        [car]: side,
    });
  };
    const context = {
      ...cars,
      moveCar,
    };

    const { children } = props;

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
