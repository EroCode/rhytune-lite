import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Songs } from '../api/songs.js';
import { Button, Navbar, Alignment, InputGroup } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

// App component - represents the whole app
class App extends Component {

  renderNavBar() {
    return <Navbar fixedToTop>
      <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Rhytune Lite</Navbar.Heading>
          <Button className="bp3-minimal" icon="home" text="Home" />
          <Button className="bp3-minimal" icon="document" text="Files" />
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <InputGroup type="search" leftIcon="search" placeholder="Search everything ..."/>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="user" />
        <Button className="bp3-minimal" icon="star" />
      </Navbar.Group>
    </Navbar>
  }

  renderSongsList() {
    return this.props.songs.map((song) => (
      <div key={ song._id }>
        <h3>{ song.title }</h3>
        <p>{ song.artist }</p>
      </div>
    ))
  }

  render() {
    return (
      <div>
        { this.renderNavBar() }
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