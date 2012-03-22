module.exports = Backbone.View.extend({
  id: 'home-view',
  render: function() {
    this.$el.html(require('./templates/home'));
    return this;
  }
});
