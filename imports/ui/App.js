import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Songs } from '../api/songs.js';

// App component - represents the whole app
class App extends Component {

  renderSongsList() {
    return this.props.songs.map((song) => (
      <div key="song._id">
        <h3>{ song.title }</h3>
        <p>{ song.artist }</p>
      </div>
    ))
  }

  render() {
    return (
      <div>
        { this.renderSongsList() }
      </div>
    )
  }

}

export default withTracker(() => {
  return {
    songs: Songs.find({}).fetch(),
  };
})(App);