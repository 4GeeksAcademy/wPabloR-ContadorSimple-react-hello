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
import Alert from './components/Alert';


const root = ReactDOM.createRoot(document.getElementById("root"))

let counter = 0;
window.limit = 0;

setInterval(function() {
    const four = Math.floor(counter / 1000) % 10; 
    const three = Math.floor(counter / 100) % 10; 
    const two = Math.floor(counter / 10) % 10;   
    const one = counter % 10;                     

    root.render(
      <React.StrictMode>
        <div className='container-fluid bg-black d-flex justify-content-center p-3'>
          <Home icon={faClock} />
          <Number value={four}/>  
          <Number value={three}/>  
          <Number value={two}/>  
          <Number value={one}/> 
        </div>
        <div className='container-fluid bg-black d-flex justify-content-center p-3'> 
          <Alert/>
        </div>
      </React.StrictMode>
    );
    counter++;

    if (counter === window.limit){
      alert("Has alcazado tu tiempo límite!!")
    }
}, 1000);
