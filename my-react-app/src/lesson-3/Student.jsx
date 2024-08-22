import propTypes from 'prop-types';

function Student(props){
  const styles = {
    border: "1px solid black",
    boxShadow: "3px 3px 3px gray",
    padding: "20px",
    margin: "20px",
  }
  return(
    <div className="student-info" style={styles}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "yes" : "no"}</p>
    </div>
  );
}

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool,
}

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
}

export default Student;