TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/board_show'],

  render: function () {
    this.$el.html(this.template({ board: this.model }))
    return this;
  }
});