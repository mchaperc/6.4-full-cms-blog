export default Backbone.View.extend({

	template: JST.post,

	tagName: 'div',
	className: 'post-item-view',

	events: {
		'click .fa-close': 'deletePost',
		'click .fa-pencil': 'editPost',
		'click button': 'submitPost'
	},

	initialize: function() {
		this.render();
		this.listenTo(this.model, 'change', this.render);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},

	deletePost: function() {
		if (confirm("Are you sure you want to delete this post?")) {
			this.model.destroy();
			$('#blog-post').html('');
		};
	},

	editPost: function() {
		var title = this.model.attributes.title;
		var content = this.model.attributes.content;
		$('.post-title-edit').val(title);
		$('.post-content-edit').val(content);
		$('.read').hide();
		$('.edit').show();
	},

	submitPost: function(e) {
		e.preventDefault();
		var title = $('.post-title-edit').val();
		var content = $('.post-content-edit').val();
		this.model.set('title', title);
		this.model.set('content', content);
		this.model.save();
		$('.edit').hide();
		$('.read').show();
	}

});