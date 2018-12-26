import { Songs } from '../imports/api/songs.js';

Meteor.publish('songs.list', function() {
	return Songs.find({})
})

Meteor.publish('songs.single', function( _id ) {
	return Songs.find({
		_id
	})
});