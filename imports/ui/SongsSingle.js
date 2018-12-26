import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Songs } from '../api/songs.js';
import { Button, Spinner} from "@blueprintjs/core";

class SongsList extends Component {

    renderSong(song) {
        return <div>
            <h3>{ song.title }</h3>
            <p>{ song.artist }</p> 
        </div>
    }

  render() {
    return (
      <div>
        { this.props.loading ? <Spinner intent="primary" /> : this.renderSong(this.props.song) }
      </div>
    )
  }

}

export default withTracker(() => {
    const handle = Meteor.subscribe('songs.single', FlowRouter.current().params.id);
    return {
      loading: !handle.ready(),
      song: Songs.findOne({ _id: FlowRouter.current().params.id }),
    };
})(SongsList);