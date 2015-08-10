TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/list_show'],
  tagName: "li",

  initialize: function () {
    this.model.fetch({
      success: function () {
        this.model.cards().each(this.addCardView.bind(this));
      }.bind(this)
    })
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.cards(), "add", this.addVardView)
  },

  render: function () {
    this.$el.html(this.template({ list: this.model }));
    this.attachSubviews();
    return this;
  },

  addCardView: function (card) {
    var subview = new TrelloClone.Views.CardShow({ model: card });
    this.addSubview(".cards", subview);
  }
});