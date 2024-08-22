function Button(){
  const styles = {
    backgroundColor: "red",
    color: "white",
    padding: "20px",
    border: "none",
    borderRadius: "10px",
    margin: "50px",
  }
  return(
    <button style={styles}>
      Click me
    </button>
  );
}

export default Button;