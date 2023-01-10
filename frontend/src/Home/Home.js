import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav
      class="navbar navbar-expand-lg"
      style={{ backgroundColor: "#003566", color: "#ffd60a" }}
    >
      <div class="container-fluid d-flex flex-column">
        {/* <Link class="navbar-brand" href="#home">
          Navbar
        </a> */}
        <h1
          className="d-block d-md-none"
          href="#home"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="text-center"
            style={{ fontSize: "30px", fontFamily: "Great Vibes ,serif" }}
          >
            Plan your Event
          </span>
        </h1>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link
                class="nav-link active d-none d-md-block"
                aria-current="page"
                href="#home"
              >
                The Event Planner
              </Link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" href="#shopping">
                Shopping List
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#guests">
                Guest List
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#menu">
                Menu
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" href="#budget">
                Budgeter
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#seats">
                Seating List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Home;
