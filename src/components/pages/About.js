import React from 'react';
import profilePic from '../assets/images/me-pic.jpeg'
import "./About.css"

export default function About() {
  return (
    <div>
      <h2>About Me</h2>
      <img src={profilePic} alt="Micheal Limones" className='profile-pic'/>
      <div className="card-content">
        <p>
          <span>Full Stack web developer</span> skilled in HTML5, CSS3,
          JavaScript, jQuary, APIs, Node, and GitHub. Thrives on the challenge
          of learning new technologies and the satisfaction of solving difficult
          problems with <span>creative solutions</span>. I’m currently enrolled
          in a Full Stack bootcamp through the University of Denver to expand my
          skills and move into a Web Developer role.{' '}
        </p>
        <p>
          Recently completed a group project working with two other individuals
          to create a mental health application to track daily progress creating
          intrinsic goals for our user. Our app sets up a loop reward system
          creating daily patterns. The user checks in daily repeating tasks
          proven to be beneficial to mental health increasing dopamine and
          serotonin. ​Check out <span>Ouroboros</span> located within my
          Projects section!The project utilized{' '}
          <span>APIs, Handlebars, mySQL, Amazon Web Services </span> and a
          significant amount of <span>JavaScript</span>.
        </p>
      </div>
    </div>
  );
}
