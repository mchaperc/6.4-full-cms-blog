export default Backbone.View.extend({

	template: JST.post,

	tagName: 'div',
	className: 'post-item-view',

	events: {
		'click .fa-close': 'deletePost'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},

	deletePost: function() {
		this.collection.remove(this.model._id);
		// console.log(this.model._id);
		console.log(this.collection);
	}

});