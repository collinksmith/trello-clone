TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/board_show'],

  initialize: function () {
    
  },

  render: function () {

  },

  addListView: function (listIndexView) {
    var view = new TrelloClone.Views.ListShow();
    this.addSubview('.lists', subview);
  }
});