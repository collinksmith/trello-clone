TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
  template: JST["boards/boards_index_item"],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    this.$el.html(this.template({ board: this.model }))
    return this;
  }
});