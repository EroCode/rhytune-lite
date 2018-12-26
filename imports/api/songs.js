import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Songs = new Mongo.Collection('songs');

const SchemasBook = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    artist: {
        type: String,
        label: "Author"
    }
});
Songs.attachSchema(SchemasBook);

Meteor.methods({
	'songs.new'({ title, artist }) {
		Songs.insert({ title, artist}, (error, result) => {
			//The insert will fail, error will be set,
			//and result will be undefined or false because "copies" is required.
			console.log(error ? error.invalidKeys : 'success')
		});
	}
});