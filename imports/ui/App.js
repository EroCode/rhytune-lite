import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Songs } from '../api/songs.js';

function SongsList(props) {
  return this.props.songs.map((song) => (
    <div>
      <h3>{ song.title }</h3>
      <p>{ song.artist }</p>
    </div>
  ))
}

// App component - represents the whole app
class App extends Component {

  render() {
    // return (
    //   <div>Hello World!</div>
    // );
    return <div>123
      { this.props.songs }
      {/* <SongsList songs={this.props.songs}></SongsList> */}
    223</div>
  }

}

export default withTracker(() => {
  return {
    songs: Songs.find({}).fetch(),
  };
})(App);