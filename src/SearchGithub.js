import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class SearchGithub extends React.Component {
  constructor(params) {
    super(params);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const username = ReactDOM.findDOMNode(this.refs.username).value;
    ReactDOM.findDOMNode(this.refs.username).value = '';
    this.props.router.push(`/profile/${username}`);
  }
  render() {
    return (
      <form
        className="navbar-form navbar-right"
        onSubmit={this.handleSubmit}
      >
        <div className="form-group">
          <input
            ref="username"
            type="text"
            placeholder="Username"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Search GitHub
        </button>
      </form>
    );
  }
}

SearchGithub.propTypes = {
  router: React.PropTypes.object.isRequired,
};

export default withRouter(SearchGithub);
