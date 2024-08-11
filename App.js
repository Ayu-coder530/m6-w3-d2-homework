import React from "react";
import {
  BrowserRouter as Router,
  Routes,  // Updated from Switch to Routes
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div className="container text-center mt-5">
        <h2>TV APPS</h2>
        <div className="d-flex justify-content-center mt-3">
          <Link to="/Netflix">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
              alt="Netflix"
              className="img-thumbnail"
              width="150"
            />
          </Link>
          <Link to="/HBOMax" className="mx-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
              alt="HBO Max"
              className="img-thumbnail"
              width="150"
            />
          </Link>
          <Link to="/Hulu">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
              alt="Hulu"
              className="img-thumbnail"
              width="150"
            />
          </Link>
          <Link to="/PrimeVideo" className="mx-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
              alt="Prime Video"
              className="img-thumbnail"
              width="150"
            />
          </Link>
        </div>

        <Routes>  {/* Updated from Switch to Routes */}
          <Route path="/:id" element={<Child />} /> {/* Updated to use element prop */}
        </Routes>
      </div>
    </Router>
  );
}

function Child() {
  let { id } = useParams();

  return (
    <div className="mt-3">
      <h3>You Selected: <span>{id}</span></h3>
    </div>
  );
}
