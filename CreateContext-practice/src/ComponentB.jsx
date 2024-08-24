import ComponentC from './ComponentC.jsx';


function ComponentB(){
  return(
    <div className="box">
      ComponentB
      <ComponentC/>
    </div>
  );
}

export default ComponentB