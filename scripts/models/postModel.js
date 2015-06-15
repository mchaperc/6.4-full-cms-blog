var Post = Backbone.Model.extend({

	urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/matts_posts',

	idAttribute: '_id',
	defaults: {
		username: '',
		title: '',
		content: ''
	},

	// toJSON: function() {
	// 	return _.extend()
	// }

});

var PostCollection = Backbone.Collection.extend({

	model: Post,
	url: 'http://tiny-lasagna-server.herokuapp.com/collections/matts_posts'

});

export default {Post, PostCollection};