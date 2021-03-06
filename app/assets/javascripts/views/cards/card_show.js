TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST["cards/card_show"],
  tagName: "li",
  className: "card-list-item list-group-item",

  events: {
    "click .delete-card": "deleteCard"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({ card: this.model }));
    return this;
  },

  deleteCard: function () {
    this.model.destroy();
  },

  addDeleteButton: function () {
    alert("Hovering");
  },

  removeDeleteButton: function () {
    alert("Stopped hovering");
  }
});