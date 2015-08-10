TrelloClone.Views.CardForm = Backbone.View.extend({
  template: JST['cards/card_form'],
  tagName: "form",
  className: "input-group",

  events: {
    "click .add-card": "addCardForm",
    "submit": "createCard"
  },

  initialize: function (options) {
    this.list = options.list;
    this.display_form = false;
  },

  render: function () {
    this.$el.html(this.template({
      card: this.model,
      list: this.list,
      display_form: this.display_form
    }))
  },

  addCardForm: function () {
    this.display_form = true;
    this.render();
  },

  createCard: function (event) {
    event.preventDefault();
    this.display_form = false
    var formData = this.$el.serializeJSON();

    this.model.save(formData, {
      success: function (model) {
        this.collection.add(model);
        this.model = new TrelloClone.Models.Card();
      }.bind(this)
    })
    this.render();
  }
});