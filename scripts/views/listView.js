export default Backbone.View.extend({

	template: JST.blogList,

	tagName: 'ul',
	className: 'blog-post-list',

	events: {

	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	}

});