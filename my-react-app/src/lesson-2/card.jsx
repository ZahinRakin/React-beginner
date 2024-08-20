import profilePic from '../assets/lesson-2/profile.jpg';

function Card(){
  return(
    <div className="base">
      <img className="profile-picture" src={profilePic} alt="profile picture."></img>
      <h2 className="title-name">Zahin Abdullah Rakin</h2>
      <h5 className="description">
        Hello, I am Zahin Abdullah Rakin. I am from Bangladesh. I am a 3rd year student at the University of Dhaka studying Software Engineering. My hometown is Mymensingh. Recently I have moved to the dormitory of the university....
      </h5>
    </div>
  );
}

export default Card;