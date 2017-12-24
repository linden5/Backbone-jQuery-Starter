var $root = $(document.body);

// 定义默认首页
var Router = Backbone.Router.extend({
    routes: {
        '*path': 'defaultRoute'
    },
    defaultRoute: function() {
        location.hash = '#/index'
    }
});

var router = new Router;

export {
    $root,
    router
}