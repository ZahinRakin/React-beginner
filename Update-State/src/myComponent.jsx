import { useState } from 'react';

function MyComponent(){
  const [car, setCar] = useState({
    name: "Audi",
    model: "A6",
    year: 2025,
  });

  function handleBrandChange(event){
    setCar(c => ({...c, name: event.target.value}));
  }

  function handleModelChange(event){
    setCar(c => ({...c, model: event.target.value}));
  }

  function handleYearChange(event){
    setCar(c => ({...c, year: event.target.value}));
  }

  return(
    <>
      <p>Brand: {car.name}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>

      <input type="text" value={car.name} onChange={handleBrandChange}/><br/>
      <input type="text" value={car.model} onChange={handleModelChange}/><br/>
      <input type="number" value={car.year} onChange={handleYearChange}/><br/>
    </>
  );
}

export default MyComponent;