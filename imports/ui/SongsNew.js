import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { withTracker } from 'meteor/react-meteor-data';
// import { Songs } from '../api/songs.js';
import {
  InputGroup, Button, Toast, Toaster, Position,
} from '@blueprintjs/core';

// App component - represents the whole app
class SongsNew extends Component {
  constructor(props) {
    super(props);
    this.state = { artist: '', title: '' };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeArtist = this.handleChangeArtist.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeArtist(event) {
    this.setState({ artist: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    Meteor.call('songs.new', {
      title: this.state.title,
      artist: this.state.artist,
    }, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        const toasterSuccess = Toaster.create({ position: Position.TOP });
        toasterSuccess.show({ message: 'Success.' });
        this.setState({ artist: '', title: '' });
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <InputGroup type="text" inputRef={this.setRefsTitle} placeholder="Title" value={this.state.title} onChange={this.handleChangeTitle} />
          <InputGroup type="text" inputRef={this.setRefsArtist} placeholder="Artist" value={this.state.artist} onChange={this.handleChangeArtist} />
          <Button icon="add" intent="primary" text="Submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default SongsNew;
