import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
library.add(faClock);

// Estilos
import '../styles/index.css';

// Componentes
import Home from './components/Home';
import Number from './components/Number';




let counter = 0;
setInterval(function() {
    const four = Math.floor(counter / 1000) % 10; 
    const three = Math.floor(counter / 100) % 10; 
    const two = Math.floor(counter / 10) % 10;   
    const one = counter % 10;                     

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <div className='container bg-black d-flex justify-content-center p-2'>
          <Home icon={faClock} />
          <Number value={four}/>  <Number value={three}/>  <Number value={two}/>  <Number value={one}/> 
        </div>
      </React.StrictMode>
    );
    counter++;
}, 1000);
