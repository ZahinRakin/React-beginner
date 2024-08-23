import { useState } from 'react';

function ToDoList(){
  const [todos, setTodos] = useState(["Washing clothes", "Taking shower", "Praying salah"]);
  function handleDeleteButton(index){
    setTodos(t => t.filter((_, i) => i !== index));
  }
  function handleUpButton(index){  //this has problem
    if(index === 0) return;
    setTodos(t => {
      const newTodos = [...t];
      [newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index - 1]];
      return newTodos;
    });
  }
  function handleDownButton(index){  //this also has problem
    if(index === todos.length-1) return;
    setTodos(t => {
      const newTodos = [...t];
      [newTodos[index + 1], newTodos[index]] = [newTodos[index], newTodos[index + 1]];
      return newTodos;
    })
  }


  return(
  <>
  <div>
    {todos.map((todo, index) => 
    <div>
      <span>
        {todo}
      </span>
      <button onClick={() => handleDeleteButton(index)}>Delete</button>
      <button onClick={() => handleUpButton(index)}>&#x261D;</button>
      <button onClick={() => handleDownButton(index)}>&#x1F447;</button>
    </div>)}
  </div>
  </>
  );
}


export default ToDoList;


// up 261D
// down  1F447