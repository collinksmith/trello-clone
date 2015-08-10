json.(list, :id, :title, :ord, :board_id)

json.cards do
  json.array! list.cards.order(:ord) do |card|
    json.partial! 'cards/card', card: card
  end
end