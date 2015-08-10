TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/list_show'],
  className: "list col-xs-3 panel",

  events: {
    "click .delete-list": "deleteList"
  },

  initialize: function () {
    this.model.fetch();
    this.model.cards().each(this.addCardView.bind(this));
    this.addCardForm();
    
    this.$el.attr('data-id', this.model.id);
    // this.$el.data('id', this.model.id);

    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.cards(), "add", this.addCardView);
    this.listenTo(this.model.cards(), "remove", this.removeCardView);
  },

  render: function () {
    this.$el.html(this.template({ list: this.model }));
    this.attachSubviews();
    return this;
  },

  addCardView: function (card) {
    var subview = new TrelloClone.Views.CardShow({ model: card });
    this.addSubview(".cards", subview);
  },

  removeCardView: function (card) {
    this.removeModelSubview(".cards", card);
  },

  addCardForm: function () {
    var newCard = new TrelloClone.Models.Card();
    var subview = new TrelloClone.Views.CardForm({
      model: newCard,
      list: this.model,
      collection: this.model.cards()
    });
    this.addSubview(".card-form", subview);
  },

  deleteList: function (event) {
    this.model.destroy();
  }
});