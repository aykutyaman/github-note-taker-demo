import React, { Component } from 'react';
import Rebase from 're-base';
import './Profile.css';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import helpers from './utils/helpers';

let base = Rebase.createClass({
  apiKey: 'AIzaSyBPmthOZgvbLX795bDyLhsnCf4sfKEXEG0',
  authDomain: 'github-note-taking.firebaseapp.com',
  databaseURL: 'https://github-note-taking.firebaseio.com',
  storageBucket: 'github-note-taking.appspot.com',
  messagingSenderId: '966744842068',
});

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: [],
    };
    this.handleAddNote = this.handleAddNote.bind(this);
  }
  componentDidMount() {
    this.init(this.props.routeParams.username);
  }
  componentWillReceiveProps(nextProps) {
    base.removeBinding(this.ref);
    this.init(nextProps.routeParams.username);
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  init(username) {
    this.ref = base.syncState(username, {
      context: this,
      asArray: true,
      state: 'notes',
    });

    helpers.getGithubInfo(username)
           .then((dataObj) => {
             this.setState({
               bio: dataObj.bio,
               repos: dataObj.repos,
             });
           });
  }
  handleAddNote(newNote) {
    this.setState({
      notes: this.state.notes.concat([newNote]),
    });
  }
  render() {
    const { username } = this.props.params;

    return (
      <div className="container profile-container">
        <div className="row">
          <div className="col-md-4">
            <UserProfile
              username={username}
              bio={this.state.bio}
            />
          </div>
          <div className="col-md-4">
            <Repos
              repos={this.state.repos}
              username={username}
            />
          </div>
          <div className="col-md-4">
            <Notes
              notes={this.state.notes}
              addNote={this.handleAddNote}
              username={username}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
