var User = Backbone.Model.extend({
	defaults: {
		username: '',
	}
});

var Users = Backbone.Collection.extend({
	model: User,
});

export default {User, Users};