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

});

export default {Post, PostCollection};