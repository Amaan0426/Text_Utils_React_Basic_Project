import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isDark ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className={`nav-link btn ${props.page==="home" ? "fw-bold active" : ""}`} onClick={() => props.setPage("home")}>Home</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link btn ${props.page==="about" ? "fw-bold active" : ""}`} onClick={() => props.setPage("about")}>{props.aboutText}</button>
            </li>
          </ul>

          <div className="d-flex align-items-center mx-3">
            <label className="switch me-2">
              <input type="checkbox" checked={isDark} onChange={handleToggle} />
              <span className="slider round"></span>
            </label>
              {/* Dynamic message */}
            <span>{isDark ? "Enable Light Mode" : "Enable Dark Mode"}</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About"
}
