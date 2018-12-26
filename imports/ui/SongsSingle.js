import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Songs } from '../api/songs.js';

// App component - represents the whole app
class SongsList extends Component {

  render() {
    return (
      <div>
        { JSON.stringify(this.props.song) }
        {/* <h3>{ this.props.song.title }</h3>
        <p>{ this.props.song.artist }</p> */}
      </div>
    )
  }

}

export default withTracker(() => {
  return {
    song: Songs.findOne({ _id: new Mongo.ObjectID(FlowRouter.current().params.id) }),
  };
})(SongsList);