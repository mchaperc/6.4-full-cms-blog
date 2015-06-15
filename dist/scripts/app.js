require.register("main", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

(function () {
  'use strict';

  $(document).ready(function () {
    Backbone.history.start();
  });
})();
  
});

require.register("router", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsListView = require('./views/listView');

var _viewsListView2 = _interopRequireDefault(_viewsListView);

var _viewsFormView = require('./views/formView');

var _viewsFormView2 = _interopRequireDefault(_viewsFormView);

var _viewsLoginView = require('./views/loginView');

var _viewsLoginView2 = _interopRequireDefault(_viewsLoginView);

var _viewsBlogView = require('./views/blogView');

var _viewsBlogView2 = _interopRequireDefault(_viewsBlogView);

var _modelsUserModel = require('./models/userModel');

var _modelsPostModel = require('./models/postModel');

var Router = Backbone.Router.extend({

	routes: {
		'': 'index',
		'blog': 'loadBlogs',
		'blog/:id': 'loadPost'
	},

	initialize: function initialize() {
		this.users = new _modelsUserModel.UserCollection();
		this.posts = new _modelsPostModel.PostCollection();
		this.posts.fetch();
		this.listenTo(this.users, 'add', (function () {
			this.navigate('blog', { trigger: true });
		}).bind(this));
	},

	index: function index() {
		var login = new _viewsLoginView2['default']({ collection: this.users });
		$('#app').html(login.el);
	},

	loadBlogs: function loadBlogs() {
		this.posts.fetch().then((function (data) {
			this.posts = new _modelsPostModel.PostCollection(data);
			this.blogList = new _viewsListView2['default']({ collection: this.posts });
			$('#app').html(this.blogList.el);
			this.blogForm = new _viewsFormView2['default']({ collection: this.posts });
			$('#app').append(this.blogForm.el);
		}).bind(this));
	},

	loadPost: function loadPost(id) {
		var post = this.posts.get(id);
		this.blogPost = new _viewsBlogView2['default']({ model: post, collection: this.posts });
		$('#blog-post').html(this.blogPost.el);
	}

});

var router = new Router();
exports['default'] = router;
module.exports = exports['default'];
  
});

require.register("models/postModel", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var Post = Backbone.Model.extend({

	urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/matts_posts',

	idAttribute: '_id',
	defaults: {
		username: '',
		title: '',
		content: ''
	}

});

var PostCollection = Backbone.Collection.extend({

	model: Post,
	url: 'http://tiny-lasagna-server.herokuapp.com/collections/matts_posts'

});

exports['default'] = { Post: Post, PostCollection: PostCollection };
module.exports = exports['default'];
// toJSON: function() {
// 	return _.extend()
// }
  
});

require.register("models/userModel", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var User = Backbone.Model.extend({
	defaults: {
		username: ''
	}
});

var UserCollection = Backbone.Collection.extend({
	model: User
});

exports['default'] = { User: User, UserCollection: UserCollection };
module.exports = exports['default'];
  
});

require.register("views/blogView", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Backbone.View.extend({

	template: JST.post,

	tagName: 'div',
	className: 'post-item-view',

	events: {
		'click .fa-close': 'deletePost',
		'click .fa-pencil': 'editPost',
		'click button': 'submitPost'
	},

	initialize: function initialize() {
		this.render();
		this.listenTo(this.model, 'change', this.render);
	},

	render: function render() {
		this.$el.html(this.template(this.model.toJSON()));
	},

	deletePost: function deletePost() {
		if (confirm('Are you sure you want to delete this post?')) {
			this.model.destroy();
			$('#blog-post').html('');
		};
	},

	editPost: function editPost() {
		var title = this.model.attributes.title;
		var content = this.model.attributes.content;
		$('.post-title-edit').val(title);
		$('.post-content-edit').val(content);
		$('.read').hide();
		$('.edit').show();
	},

	submitPost: function submitPost(e) {
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
module.exports = exports['default'];
  
});

require.register("views/formView", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Backbone.View.extend({

	template: JST.form,

	tagName: 'div',
	className: 'form-container',

	events: {
		'click .showForm': 'showForm',
		'click .submit-blog-post': 'postBlog'
	},

	initialize: function initialize() {
		this.render();
	},

	render: function render() {
		this.$el.html(this.template(this.collection));
	},

	showForm: function showForm() {
		$('.add-post-form').slideToggle();
	},

	postBlog: function postBlog(e) {
		e.preventDefault();
		var content = $('.add-blog-content-input').val();
		var title = $('.add-blog-title-input').val();
		var username = localStorage.getItem('username') || '';
		if (content != '' && title != '') {
			this.collection.create({
				username: username,
				title: title,
				content: content
			});
			this.$('form').each(function () {
				this.reset();
			});
			$('*').css({ 'outline': 'none' });
		} else {
			if (title === '') {
				$('.add-blog-title-input').css({ 'outline': '2px solid rgba(255,0,0,.6)' }).focus();
			} else {
				$('.add-blog-content-input').css({ 'outline': '2px solid rgba(255,0,0,.6)' }).focus();
			}
		}
	}

});
module.exports = exports['default'];
  
});

require.register("views/listView", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Backbone.View.extend({

	template: JST.blogList,

	tagName: 'ul',
	className: 'blog-post-list',

	events: {},

	initialize: function initialize() {
		this.render();
		this.listenTo(this.collection, 'update', this.render);
		this.listenTo(this.collection, 'change', this.render);
	},

	render: function render() {
		this.collection.fetch();
		this.$el.html(this.template(this.collection.toJSON()));
	}

});
module.exports = exports['default'];
  
});

require.register("views/loginView", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Backbone.View.extend({

	template: JST.login,

	tagName: 'form',
	className: 'login-form',

	events: {
		'submit': 'login'
	},

	initialize: function initialize() {
		this.render();
	},

	render: function render() {
		this.$el.html(this.template(this.collection.toJSON()));
	},

	login: function login(e) {
		e.preventDefault();
		var username = this.$('.username-input').val();
		console.log(username);
		window.localStorage.setItem('username', username);
		this.collection.add({
			username: username
		});
	}

});
module.exports = exports['default'];
  
});

//# sourceMappingURL=app.js.map