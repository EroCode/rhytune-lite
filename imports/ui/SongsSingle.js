import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Songs } from '../api/songs.js';
import { Button, Spinner} from "@blueprintjs/core";

// App component - represents the whole app
class SongsList extends Component {

    renderSong(song) {
        return (
            <div>
                { JSON.stringify(song) }
              {/* <h3>{ song.title }</h3>
              <p>{ song.artist }</p> */}
            </div>
          )
    }

  render() {
    let song = this.props.song;
    return (
      <div>
        { this.props.loading ? <Spinner intent="primary" /> : this.renderSong(song) }
      </div>
    )
  }

}

export default withTracker(() => {
    const handle = Meteor.subscribe('songs.single', FlowRouter.current().params.id);
    return {
      loading: !handle.ready(),
      songs: Songs.find({ _id: FlowRouter.current().params.id }).fetch(),
    };
})(SongsList);