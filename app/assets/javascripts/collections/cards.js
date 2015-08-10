TrelloClone.Collections.Cards = Backbone.Collection.extend({
  url: "/cards",

  model: TrelloClone.Models.Card,

  getOrFetch: function (id) {
    var cards = this;
    var card = this.get(id);

    if (card) {
      card.fetch();
    } else {
      card = new TrelloClone.Models.card({ id: id });
      cards.add(card)
      card.fetch({
        error: function () {
          cards.remove(card);
        }
      });
    }

    return card;
  }
});