export default Backbone.View.extend({

	template: JST.post,

	tagName: 'div',
	className: 'post-item-view',

	events: {

	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	}

});