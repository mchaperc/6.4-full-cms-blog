this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Hello</h1>\n";
},"useData":true});
this["JST"]["blogList"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	<li class=\"blog-post-item\">\n		<a href=\"#blog/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"blog-post-id\"><h2 class=\"blog-post-title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2></a>\n	</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["JST"]["form"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header class=\"show-add\">\n	<i class=\"fa fa-plus-circle showForm\"></i>\n</header>\n\n<form class=\"add-post-form\">\n	<label class=\"add-blog-title\">Title:</label>\n	<input type=\"text\" class=\"add-blog-title-input\" required>\n	<label class=\"add-blog-content\">Content:</label>\n	<textarea type=\"text\" class=\"add-blog-content-input\" required></textarea>\n	<button type=\"submit\" class=\"submit-blog-post\"><i class=\"fa fa-check\"></i></button>\n</form>\n\n<div id=\"blog-post\"></div>";
},"useData":true});
this["JST"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2 class=\"login-title\">Blogger Login</h2>\n<input type=\"text\" class=\"username-input\" placeholder=\"Username\" required autofocus>\n<button type=\"submit\" class=\"username-submit\">Login</button>";
},"useData":true});
this["JST"]["post"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<i class=\"fa fa-pencil\"></i><i class=\"fa fa-close\"></i>\n<h2 class=\"post-title read\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n<input type=\"text\" class=\"post-title-edit edit\">\n<p class=\"post-author\">by: "
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</p>\n<p class=\"post-content read\">"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\n<textarea cols=\"30\" rows=\"10\" class=\"post-content-edit edit\"></textarea>\n<button type=\"submit\" class=\"edit-post edit\"><i class=\"fa fa-edit\"></i></button>";
},"useData":true});