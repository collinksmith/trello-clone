TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: "lists",

  model: TrelloClone.Models.List,

  getOrFetch: function (id) {
    var lists = this;
    var list = this.get(id);

    if (list) {
      list.fetch();
    } else {
      list = new TrelloClone.Models.list({ id: id });
      list.fetch({
        success: function () {
          lists.add(list);
        }
      });
    }

    return list;
  }
});