import React from 'react';

export default function About() {
  return (
    <div className="container my-3">
      <h1>About Us</h1>
      <p className="lead">
        Welcome to <strong>TextUtils</strong> – your simple text utility app built with React.
        Transform, analyze, and manage text with just a click.
      </p>

      <h3>Features</h3>
      <div className="row">
        <div className="col-md-3 my-2">
          <div className="card p-2 shadow-sm">Uppercase & Lowercase</div>
        </div>
        <div className="col-md-3 my-2">
          <div className="card p-2 shadow-sm">Clear Text</div>
        </div>
        <div className="col-md-3 my-2">
          <div className="card p-2 shadow-sm">Reverse Text</div>
        </div>
        <div className="col-md-3 my-2">
          <div className="card p-2 shadow-sm">Remove Extra Spaces</div>
        </div>
        <div className="col-md-3 my-2">
          <div className="card p-2 shadow-sm">Find & Replace</div>
        </div>
        <div className="col-md-3 my-2">
          <div className="card p-2 shadow-sm">Copy & Download</div>
        </div>
        <div className="col-md-3 my-2">
          <div className="card p-2 shadow-sm">Word/Char Count</div>
        </div>
        <div className="col-md-3 my-2">
          <div className="card p-2 shadow-sm">Dark/Light Mode</div>
        </div>
      </div>

      <h3 className="mt-3">Our Goal</h3>
      <p>
        Provide a lightweight text utility in your browser, perfect for students,
        writers, and developers.
      </p>

      <h3>Technologies Used</h3>
      <div>
        <span className="badge bg-primary mx-1">React</span>
        <span className="badge bg-success mx-1">Bootstrap</span>
        <span className="badge bg-dark mx-1">JavaScript</span>
      </div>
    </div>
  );
}
