import data from './data';
import './App.css';
import React,{ useState } from 'react';
import Tours from './components/Tours';

function App() {
  const[tours,setTours]=useState(data)
  //console.log(data);
  //we remove base on some attribute,that is id(unique)
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  if(tours.length === 0){
    return(
      <div className='refresh'>
          <h2>No Tours Left</h2>
          <button className='btn-white' onClick={() => setTours(data)}>
            Refresh
          </button>
      </div>
    )
  }
  return (
    <div>
    <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
