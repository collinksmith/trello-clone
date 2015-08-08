TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/board_show'],

  initialize: function () {
    this.model.lists().each(this.addListView.bind(this));
    this.listenTo(this.model.lists(), 'add', this.addListView);
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ board: this.model }));
    this.attachSubviews();
    return this;
  },

  addListView: function (list) {
    console.log(list);
    var subview = new TrelloClone.Views.ListShow({ model: list });
    this.addSubview('.lists', subview);
  }
});