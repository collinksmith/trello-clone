TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "/boards",

  parse: function (payload) {
    if (payload.lists) {
      this.lists().set(payload.lists);
      delete payload.lists;
    }

    return payload;
  },

  lists: function () {
    if (this._lists === undefined) {
      this._lists = new TrelloClone.Collections.Lists();
    }

    return this._lists;
  }
});