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
import Controllers from './components/Controllers';


const root = ReactDOM.createRoot(document.getElementById("root"))

let counter = 0;
let intervalId = null;
let isCountingDown = false;
window.limit = 0;


function startCounter(){
  isCountingDown = false;
  counter = 0;
  startInterval();
}

function startCountDown(numb) {
  isCountingDown = true;
  counter = numb;
  startInterval();
}

function startInterval(){
  if (intervalId) {
    clearInterval(intervalId);
  }
    

  intervalId = setInterval(()=> {
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
        <div className='container-fluid bg-black d-flex justify-content-center'> 
          <Alert/>
        </div>
        <div className='container-fluid bg-black d-flex justify-content-center p-3'> 
          <Controllers onStop={stopCounter} onReset={resetCounter} onResume={resumeCounter} onStartCountDown={startCountDown}/>
        </div>
      </React.StrictMode>
    );
    if (isCountingDown){
      if (counter <= 0){
        clearInterval(intervalId);
        alert("El tiempo ha terminado!")
      } else {
        counter--;
      }
    } else {
      if (window.limit > 0 && counter === window.limit){
        alert("Has alcazado tu tiempo límite!!")
    }
    counter++;
    }
}, 1000);

}


function stopCounter(){
  clearInterval(intervalId);
  intervalId = null
};

function resetCounter(){
  stopCounter()
  counter = 0;
  startCounter();
};

function resumeCounter(){
  if(!intervalId){
    startCounter();
  }
};


startInterval();