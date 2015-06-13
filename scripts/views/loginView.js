export default Backbone.View.extend({

	template: JST.login,

	tagName: 'form',
	className: 'login-form',

	events: {

	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	}

});