import ComponentD from './ComponentD.jsx';


function ComponentC(){
  return(
    <div className="box">
      ComponentC
      <ComponentD/>
    </div>
  );
}

export default ComponentC