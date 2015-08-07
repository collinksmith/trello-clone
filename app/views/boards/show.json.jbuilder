json.partial!("board", board: @board)
json.lists do
  json.array! @board.lists do |list|
    json.partial! 'lists/list', list: list, display_cards: false
  end
end