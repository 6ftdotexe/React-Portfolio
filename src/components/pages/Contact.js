import React from "react";


function Contact() {
  return (
    <div className="container text-center">
      <h1 className="mt-5 mb-5">Contact</h1>
      <div className="card">
        <p className="mt-5 mb-5">
          <a href="mailto:lancepage99@gmail.com" className="lead text-muted">Email me!</a>
        </p>
        <p>
          <a href="https://github.com/6ftdotexe" target="_blank" className="btn btn-secondary my-2 mr-3 mt-5 mb-5">GitHub</a>
          <a href="https://www.linkedin.com/in/lance-page-82798214a/" target="_blank" className="btn btn-secondary my-2 mt-5 mb-5">Linkedin</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
