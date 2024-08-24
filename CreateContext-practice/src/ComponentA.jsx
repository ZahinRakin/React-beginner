import ComponentB from './ComponentB.jsx';
import { useState, createContext } from 'react';


const UserContext = createContext();

function ComponentA(){
  const [user, setUser] = useState("Rakin");
  return(
    <div className="box">
      hello, {user}
      <UserContext.Provider value={[user, setUser]}>
        <ComponentB/>
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
export { UserContext }; //do i have to export it somewhere else?