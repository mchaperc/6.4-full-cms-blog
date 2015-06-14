export default Backbone.View.extend({

	template: JST.form,

	tagName: 'div',
	className: 'form-container',

	events: {
		'click .showForm': 'showForm',
		'click .submit-blog-post': 'postBlog'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.collection));
	},

	showForm: function() {
		$('.add-post-form').slideToggle();
	},

	postBlog: function(e) {
		e.preventDefault();
		var content = $('.add-blog-content-input').val();
		var title = $('.add-blog-title-input').val();
		// var username = $('.').val();
		this.collection.create({
			// username: username,
			title: title,
			content: content
		})
	}

});