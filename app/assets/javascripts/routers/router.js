TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardsIndex",
    "boards": "boardsIndex",
    "boards/new": "boardsForm",
    "boards/:id": "boardShow"
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
  },

  boardsIndex: function () {
    this.collection.fetch();
    var view = new TrelloClone.Views.BoardsIndex({ collection: this.collection });
    this._swapView(view);
  },

  boardsForm: function () {
    var board = new TrelloClone.Models.Board();
    var view = new TrelloClone.Views.BoardForm({ 
      model: board,
      collection: this.collection
    });
    this._swapView(view);
  },

  boardShow: function (id) {
    var board = this.collection.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({ model: board });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});