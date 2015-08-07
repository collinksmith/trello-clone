class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :title, null: false
      t.text :description
      t.integer :ord, null: false
      t.integer :list_id, null: false

      t.timestamps null: false
    end

    add_index :cards, :list_id
    add_index :cards, :ord, unique: true
  end
end
