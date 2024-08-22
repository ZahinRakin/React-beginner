function UserGreeting(props){
  return(props.isLoggedIn ? <h2>welcome {props.name}</h2> :
  <h2>{props.name} Please log in to continue</h2>);
}

export default UserGreeting;