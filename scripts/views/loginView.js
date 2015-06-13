export default Backbone.View.extend({

	template: JST.login,

	tagName: 'form',
	className: 'login-form',

	events: {
		'submit': 'login',
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	},

	login: function(e) {
		e.preventDefault();
		var username = this.$('.username-input').val();
		console.log(username);
		this.collection.add({
			username: username,
		});
	}

});