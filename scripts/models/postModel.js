var Post = Backbone.Model.extend({

	idAttribute: '_id',
	defaults: {
		username: '',
		title: '',
		content: ''
	}

});

var PostCollection = Backbone.Collection.extend({

	model: Post,
	url: 'http://tiny-lasagna-server.herokuapp.com/collections/matts_posts'

});

export default {Post, PostCollection};