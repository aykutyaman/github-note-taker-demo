import React from 'react';
import './App.css';
import SearchGithub from './SearchGithub';

const bootstrap = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css';

const App = ({ children }) => (
  <div>
    <link
      rel="stylesheet"
      href={bootstrap}
    />
    <nav
      className="navbar navbar-inverse navbar-fixed-top"
    >
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            Project name
          </a>
        </div>
        <div
          id="navbar"
          className="navbar-collapse collapse"
        >
          <SearchGithub />
        </div>
      </div>
    </nav>
    {children}
  </div>
);

export default App;
