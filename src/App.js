import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";

// components
import TodosList from "./components/todos-list.component";
import EditTodo from "./components/edit-todo.component";
import CreateTodo from "./components/create-todo.component";
class App extends Component {
  render() {
    return (
      // Router elemebt
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a
              className="navbar-brand"
              href="http://www.kouathao.com"
              target="_blank"
            >
              <img
                src={logo}
                width="30"
                height="30"
                alt="CodingTheSmartWay.com"
              />
            </a>
            <Link to="/" className="navbar-brand">
              MERN-Stack Todo App
            </Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" exact component={EditTodo} />
          <Route path="/create" exact component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
