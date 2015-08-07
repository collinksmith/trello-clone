TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "boards": "boardsIndex"
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
  },

  boardsIndex: function () {
    var view = TrelloClone.Views.BoardsIndex({ collection: this.collection });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this.view.render().$el);
  }
});