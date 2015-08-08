TrelloClone.Views.ListForm = Backbone.View.extend({
  template: JST['lists/list_form'],
  tagName: 'form',
  className: 'create-list',

  events: {
    'submit': 'createList'
  },

  initialize: function (options) {
    this.board = options.board
  },

  render: function () {
    this.$el.html(this.template({ list: this.model, board: this.board }));
    return this;
  },

  createList: function (event) {
    event.preventDefault();
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON();

    this.model.save(formData, {
      success: function (model) {
        this.collection.add(model);
        this.model = new TrelloClone.Models.List();
        this.render();
      }.bind(this)
    });
  }
});