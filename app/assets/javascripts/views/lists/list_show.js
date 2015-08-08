TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/list_show'],
  tagName: "li",

  initialize: function () {

  },

  render: function () {
    this.$el.html(this.template({ list: this.model }));
    return this;
  }
});