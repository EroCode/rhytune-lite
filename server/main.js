import { check } from 'meteor/check'
import { Songs } from '../imports/api/songs.js';

Meteor.publish('songs.list', function() {
  return Songs.find({});
});

Meteor.publish('songs.single', function(_id) {
  check(_id, String);
  return Songs.find({ _id });
});
