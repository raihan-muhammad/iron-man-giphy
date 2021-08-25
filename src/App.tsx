import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import classes from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={classes.App}>
      <h1>Welcome to your giphy</h1>
      <Router>
        <Link to="/iron-man" className={classes["link-menu"]}>
          IRON MAN GIPHY
        </Link>
        <Link to="/iron-man" className={classes["link-menu"]}>
          SEARCH YOUR GIPHY
        </Link>
      </Router>
    </div>
  );
};

export default App;
