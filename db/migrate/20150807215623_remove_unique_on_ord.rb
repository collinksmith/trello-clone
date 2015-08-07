class RemoveUniqueOnOrd < ActiveRecord::Migration
  def change
    remove_index :lists, column: :ord
    remove_index :cards, column: :ord
  end
end
