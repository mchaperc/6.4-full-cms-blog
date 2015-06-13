export default Backbone.View.extend({

	template: JST.form,

	tagName: 'form',
	className: 'add-post-form',

	events: {

	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.collection));
	}

});