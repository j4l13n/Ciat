import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Welcome from './components/auth-components/welcome.component';
import Signup from './components/auth-components/signup.component';
import Login from './components/auth-components/login.component';

function App() {
  return (
    <Router>
      <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Ciat</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Route path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
