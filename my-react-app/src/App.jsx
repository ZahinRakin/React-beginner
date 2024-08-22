// import Header from './lesson-1/Header.jsx';
// import Footer from './lesson-1/Footer.jsx';
// import Food from './lesson-1/Food.jsx';
// import Card from './lesson-2/card.jsx';
// import Button from "./lesson-2/button/Button.jsx";
// import Button from "./Button.jsx";
// import Student from "./lesson-3/Student.jsx";
import UserGreeting from "./lesson-3/UserGreeting.jsx";

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} name="Zahin Abdullah Rakin"/>
      <UserGreeting isLoggedIn={false} name="Ridoan Islam Ryene"/>
    </>
  );
}

export default App
