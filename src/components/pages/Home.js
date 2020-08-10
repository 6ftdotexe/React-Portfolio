import React from "react";
import Resume from "../../Resume.pdf"

function Home(props) {
  return (
    <div className="container text-center">
      <h1 className="mt-5 mb-5">Lance Page</h1>
      <img src="https://i.ibb.co/JR9LdGd/profile-picture.jpg" alt="pic" border="0"/>
      <div className="card">
        <p className='text-muted mt-5 mb-3'>
          Full Stack Web Developer
      </p>
        <p>
          <a href={Resume} target="_blank" className="btn btn-secondary my-2 mb-3">Resume</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
