import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Songs } from '../api/songs.js';
import { Button } from "@blueprintjs/core";

// App component - represents the whole app
class SongsList extends Component {

  renderSongsList() {
    return this.props.songs.map((song) => (
      <a key={ song._id.valueOf() } href={'songs/' + song._id.valueOf()}><div>
        <h3>{ song.title }</h3>
        <p>{ song.artist }</p>
      </div></a>
    ))
  }

  render() {
    return (
      <div>
        <a href="songs/new"><Button icon="add" intent="primary" text="New" /></a>
        { this.renderSongsList() }
      </div>
    )
  }

}

export default withTracker(() => {
  return {
    songs: Songs.find({}).fetch(),
  };
})(SongsList);