var MainRouter = require('routers/main_router');
var HomeView = require('views/home_view');

exports.Application = (function() {
  function Application() {
    var _this = this;
    $(function() {
      _this.initialize();
      return Backbone.history.start();
    });
  }

  Application.prototype.initialize = function() {
    this.router = new MainRouter;
    return this.homeView = new HomeView;
  };

  return Application;
})();

window.app = new exports.Application;
