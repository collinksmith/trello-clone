TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST['boards/boards_index'],

  render: function () {
    this.$el.html(this.template());
    return this;
  }
});