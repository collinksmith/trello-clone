json.array! @lists do |list|
  json.partial! 'list', list: list, display_cards: false
end