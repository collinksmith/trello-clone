TrelloClone.Views.ListForm = Backbone.View.extend({
  template: JST['lists/list_form'],
  tagName: 'form',
  className: 'create-list',

  events: {
    'submit': 'createList',
    'click .add-list': 'addListForm'
  },

  initialize: function (options) {
    this.board = options.board;
    this.display_form = false;
  },

  addListForm: function () {
    this.display_form = true;
    this.render();
  },

  render: function () {
    this.$el.html(this.template({ 
      list: this.model,
      board: this.board,
      display_form: this.display_form }));
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