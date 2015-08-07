TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST['board_index'],

  render: function () {
    this.$el.html(this.template());
    return this;
  }
});