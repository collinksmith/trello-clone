TrelloClone.Views.BoardForm = Backbone.View.extend({
  template: JST['boards/board_form'],

  events: {
    'submit .create-board': 'createBoard'
  },

  render: function () {
    this.$el.html(this.template({ board: this.model }));
    return this;
  },

  createBoard: function (event) {
    event.preventDefault();
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON();

    this.model.save(formData, {
      success: function (model) {
        this.collection.add(model);
        Backbone.history.navigate("#", {trigger: true})
      }.bind(this),
    })
  }
});