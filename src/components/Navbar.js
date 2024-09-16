import React from "react";

function Navbar({ onclick }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <div className="brand me-4">
                    <p className="navbar-brand fw-bold">NewsApp</p>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="nav-link btn btn-link text-white" type="button" onClick={() => onclick("all")}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link text-white" type="button" onClick={() => onclick("general")}>General</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link text-white" type="button" onClick={() => onclick("technology")}>Technology</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link text-white" type="button" onClick={() => onclick("business")}>Business</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link text-white" type="button" onClick={() => onclick("health")}>Health</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link text-white" type="button" onClick={() => onclick("sports")}>Sports</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link text-white" type="button" onClick={() => onclick("entertainment")}>Entertainment</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
