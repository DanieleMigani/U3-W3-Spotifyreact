import { Col, Nav } from "react-bootstrap";
import logo from "../assets/images/Spotify_Logo.png";
import { FaHome } from "react-icons/fa";
import { BsFillBookFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const VerticalSideBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Col md={2}>
      <Nav
        className="p-2 navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="nav-container mt-4">
          <Link to={"/"} className="navbar-brand" href="index.html">
            <img src={logo} alt="Spotify_Logo" width="131" height="40" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mt-4">
              <ul>
                <li>
                <Link to={"/"} className="navbar-brand" href="index.html">
                    <FaHome className="fas fa-home fa-lg"></FaHome>&nbsp; Home
                </Link>
                </li>
                <li>
                  <a className="nav-item nav-link" href="alt">
                    <BsFillBookFill className="fas fa-book-open fa-lg"></BsFillBookFill>
                    &nbsp; Your Library
                  </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      onChange={handleChange}
                    />
                    <div
                      className="input-group-append"
                      style={{ marginBottom: "4%" }}
                    >
                      <Link
                        to={"/search-page/" + query}
                        className="btn btn-outline-secondary btn-sm py-2"
                        type="button"
                        id="button-addon1"
                        onClick="search()"
                      >
                        GO
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-btn linkBottomNav">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <a href="alt">Cookie Policy</a> | <a href="alt"> Privacy</a>
        </div>
      </Nav>
    </Col>
  );
};

export default VerticalSideBar;

