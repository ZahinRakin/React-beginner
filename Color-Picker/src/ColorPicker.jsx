import {useState} from 'react';

function ColorPicker(){
  const [color, setColor] = useState("#FFFFFF");
  function handleColorChange(event){
    setColor(event.target.value);
  }

  return(
    <div className="container">
      <h1>
        Color Picker
      </h1>
      <div className="display-place" style={{backgroundColor: color}}>
        Background Color: {color}
      </div>
      <p className="pick-section">
        <h4>Pick Color: </h4>
        <input type="color" value={color} onChange={handleColorChange}/>
      </p>
    </div>
  );
}

export default ColorPicker;