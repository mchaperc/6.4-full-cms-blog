import ListView from './views/listView';
import FormView from './views/formView';
import LoginView from './views/loginView';
import {Users} from './models/userModel';
import {Post, PostCollection} from './models/postModel';

var Router = Backbone.Router.extend({

	routes: {
		'': 'index',
		'/blog': 'loadBlogs',
		'blog/:id': 'loadPost',
	},

	initialize: function() {

	},

	index: function() {

	},

	loadBlogs: function() {

	},

	loadPost: function() {

	}

});

var router = new Router();
export default router;