/**
 * User: Vincent Ting
 * Date: 9/29/13
 * Time: 11:35 PM
 */

(function () {

    var app = VintJS.create({
        hash_prefix: '!',
        getCurrentUser: function () {
            return window['current_user'];
        },
        login_url: '/login',
        template_url: '/example/template/'
    });

    app.route
        .when('/', function () {
            $('body').html('Here is homepage,and will redirect to index in 2 min.');
            VintJS.setTimeout(function () {
                this.redirectTo('/index');
            }, 2000, this);
        })
        .when('/index', 'welcome#index', {
            login_required: true
        })
        .when('/login', 'user#login')
        .when('/hello/:string', function (name) {
            $('body').html('Hello ' + name);
        })
        .when('/404', function () {
            $('body').html('Here is 404 page');
        })
        .resources('posts')
        .otherwise({
            redirect_to: '/404'
        });

    window.app = app;


}).call(window);