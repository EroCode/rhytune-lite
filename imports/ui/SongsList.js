import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Songs } from '../api/songs.js';
import { Button, Spinner} from "@blueprintjs/core";

// App component - represents the whole app
class SongsList extends Component {

  renderSongsList() {
    return this.props.songs.map((song) => (
      <a key={ song._id.valueOf() } href={'/songs/' + song._id.valueOf()}><div>
        <h3>{ song.title }</h3>
        <p>{ song.artist }</p>
      </div></a>
    ))
  }

  render() {
    return (
      <div>
        <a href="/songs/new"><Button icon="add" intent="primary" text="New" /></a>
        { this.props.loading ? <Spinner intent="primary" /> : this.renderSongsList() }
      </div>
    )
  }

}

export default withTracker(() => {
  const handle = Meteor.subscribe('songs.list');
  return {
    loading: !handle.ready(),
    songs: Songs.find({}).fetch(),
  };
})(SongsList);