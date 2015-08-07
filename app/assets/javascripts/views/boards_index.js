TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST["boards/boards_index"],

  initialize: function () {
    this.collection.each(this.addBoardView.bind(this));
    this.listenTo(this.collection, 'add', this.addBoardView);
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },

  addBoardView: function (board) {
    var subview = new TrelloClone.Views.BoardShow({ model: board });
    this.addSubview('.boards', subview);
  }
});