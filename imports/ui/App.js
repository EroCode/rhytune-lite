import React, { Component } from 'react';
// import { withTracker } from 'meteor/react-meteor-data';
// import { Songs } from '../api/songs.js';
import { Button, Navbar, Alignment, InputGroup } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

// App component - represents the whole app
class App extends Component {

  renderNavBar() {
    return <Navbar fixedToTop>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Rhytune Lite</Navbar.Heading>
        <a href="/">
          <Button className="bp3-minimal" icon="home" text="Home" />
        </a>
        <a href="/songs">
          <Button className="bp3-minimal" icon="document" text="Songs" />
        </a>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <InputGroup type="search" leftIcon="search" placeholder="Search everything ..."/>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="user" />
        <Button className="bp3-minimal" icon="star" />
      </Navbar.Group>
    </Navbar>
  }

  render() {
    return (
      <div>
        { this.renderNavBar() }
        { this.props.main }
      </div>
    )
  }

}

export default App;