import { useState } from 'react';

function ArrayState(){
  const [foods, setFoods] = useState(["Apples", "Oranges", "Banana", "Peach"]);

  function handleAddFood(){
    const foodName = document.querySelector(".enter-food").value;
    document.querySelector(".enter-food").value = "";
    foodName !== "" ? setFoods(f => [...f, foodName]) : null;
  }

  function handleRemoveFood(index){
    setFoods(f => f.filter((_, i) => i !== index));
  }

  return(
    <>
      <div>Foods</div>
      <ul>
        {foods.map((food, index) => <li onClick={() => handleRemoveFood(index)}>{food}</li>)}
      </ul>
      <input type="text" placeholder="Enter Food" className="enter-food"/>
      <button onClick={handleAddFood}>Add Food</button>
    </>
  );
}

export default ArrayState;