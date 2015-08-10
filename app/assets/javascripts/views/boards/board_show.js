TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/board_show'],

  initialize: function () {
    this.model.lists().each(this.addListView.bind(this));
    this.addListForm();
    this.listenTo(this.model.lists(), 'add', this.addListView);
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ board: this.model }));
    this.attachSubviews();
    return this;
  },

  addListView: function (list) {
    var subview = new TrelloClone.Views.ListShow({ model: list });
    this.addSubview('.lists', subview);
  },

  addListForm: function () {
    var newList = new TrelloClone.Models.List();
    var subview = new TrelloClone.Views.ListForm({ 
      model: newList,
      collection: this.model.lists(),
      board: this.model 
    });
    this.addSubview('.new-list-form', subview);
  }
});