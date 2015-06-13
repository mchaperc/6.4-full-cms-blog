var User = Backbone.Model.extend({
	defaults: {
		username: '',
	}
});

var UserCollection = Backbone.Collection.extend({
	model: User,
});

export default {User, UserCollection};