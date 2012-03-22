module.exports = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  home: function() {
    $('body').html(app.homeView.render().el);
  }
});
