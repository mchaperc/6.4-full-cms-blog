import ListView from './views/listView';
import FormView from './views/formView';
import LoginView from './views/loginView';
import BlogView from './views/blogView';
import {UserCollection} from './models/userModel';
import {Post, PostCollection} from './models/postModel';

var Router = Backbone.Router.extend({

	routes: {
		'': 'index',
		'blog': 'loadBlogs',
		':id': 'loadPost',
	},

	initialize: function() {
		this.users = new UserCollection();
		this.posts = new PostCollection();
		this.posts.fetch();
		this.listenTo(this.users, 'add', function() {
			this.navigate('blog', {trigger: true})
		}.bind(this));
	},

	index: function() {
		var login = new LoginView({collection: this.users});
		$('#app').html(login.el);
	},

	loadBlogs: function() {
		this.posts.fetch().then(function(data) {
			this.posts = new PostCollection(data);
			var blogList = new ListView({collection: this.posts});
			$('#app').html(blogList.el);
			var blogForm = new FormView({collection: this.posts});
			$('#app').append(blogForm.el);
		});
	},

	loadPost: function(id) {
		var post = this.posts.get(id);
		console.log(post);
		this.blogPost = new BlogView({model: post, collection: this.posts});
		$('#blog-post').html(this.blogPost.el);
	}

});

var router = new Router();
export default router;