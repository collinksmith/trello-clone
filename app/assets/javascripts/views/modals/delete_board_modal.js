TrelloClone.Views.DeleteBoardModal = Backbone.View.extend({
  template: JST["modals/delete_board_modal"],
  className: "modal-background",

  render: function () {
    // debugger;
    this.$el.html(this.template());
    return this;
  }
});