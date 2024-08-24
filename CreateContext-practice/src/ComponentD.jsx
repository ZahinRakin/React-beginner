import { UserContext } from './ComponentA.jsx';
import { useContext, useEffect } from 'react';

function ComponentD(){
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUser(u => u === 'Rakin' ? 'Zahin' : 'Rakin');
    }, 1000);

    return( () => {
      clearInterval(intervalId);
    });
  },[]);

  return(
    <div className="box">
      Bye {user}
    </div>
  );
}

export default ComponentD