json.(list, :title, :ord, :board_id)

if display_cards
  json.cards do
    json.array! list.cards do |card|
      json.partial! 'cards/card', card: card
    end
  end
end