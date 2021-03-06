TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: "/boards",

  model: TrelloClone.Models.Board,

  getOrFetch: function (id) {
    var boards = this;
    var board = this.get(id);

    if (board) {
      board.fetch();
    } else {
      board = new TrelloClone.Models.Board({ id: id });
      boards.add(board);
      board.fetch({
        error: function () {
          boards.remove(board);
        }
      });
    }

    return board;
  }
});