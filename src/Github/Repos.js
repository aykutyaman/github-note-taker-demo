import React, { Component } from 'react';

class Repos extends Component {
  render() {
    const repos = this.props.repos.map((repo, index) => {
      return (
        <li className="list-group-item" key={index}>
          {
            repo.html_url &&
            <h4>
              <a href={repo.html_url}>{repo.name}</a>
            </h4>
          }
          {
            repo.description &&
            <p>{repo.description}</p>
          }
        </li>
      );
    });
    return (
      <div>
        <h3>Repos</h3>
        <ul className="list-group">
          {repos}
        </ul>
      </div>
    );
  }
}

Repos.propTypes = {
  repos: React.PropTypes.array.isRequired,
  username: React.PropTypes.string.isRequired,
};

export default Repos;
