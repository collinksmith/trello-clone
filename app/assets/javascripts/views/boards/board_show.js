TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/board_show'],

  events: {
    "sortstop": "sortLists",
    "click .delete-board": "deleteBoardModal"
  },

  initialize: function () {
    this.model.lists().each(this.addListView.bind(this));
    this.addListForm();
    this.listenTo(this.model.lists(), 'add', this.addListView);
    this.listenTo(this.model.lists(), 'remove', this.removeListView);
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ board: this.model }));
    this.attachSubviews();
    this.onRender();
    return this;
  },

  sortLists: function () {
    var newLists = _(this.$(".lists").children());

    newLists.each(function (list, index) {
      var id = $(list).data('id')
      var newOrd = index + 1;
      var newList = this.model.lists().getOrFetch(id);
      newList.save({ ord: newOrd });
    }.bind(this));
  },

  onRender: function () {
    this.$(".lists").sortable();
    Backbone.CompositeView.prototype.onRender.call(this);
  },

  addListView: function (list) {
    var subview = new TrelloClone.Views.ListShow({ model: list });
    this.addSubview('.lists', subview);
  },

  removeListView: function (list) {
    this.removeModelSubview('.lists', list);
  },

  addListForm: function () {
    var newList = new TrelloClone.Models.List();
    var subview = new TrelloClone.Views.ListForm({ 
      model: newList,
      collection: this.model.lists(),
      board: this.model 
    });
    this.addSubview('.new-list-form', subview);
  },

  deleteBoardModal: function () {
    var modalView = new TrelloClone.Views.DeleteBoardModal({ model: this.model });
    this.addSubview('.modal', modalView);
    this.render();
  }
});