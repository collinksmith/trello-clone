TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST["cards/card_show"],
  tagName: "li",
  className: "card-list-item",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({ card: this.model }));
    return this;
  }
});