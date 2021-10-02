import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link} from "react-router-dom";
import Todos from "./components/todos";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          CRUD Tutorial
        </a>

        <Link to="" />
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
          
          </li>
          <li className="nav-item">
            {/* <Link to={"/add"} className="nav-link">
              Add
            </Link> */}
            
          </li>
        </div>
      </nav>
      <div className="contaiver">
      <Todos />
      </div>

      
    </div>
  );
}

export default App;
