class CreateImages < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.integer :identifier, null: false
      t.string :url, null: false, unique: true
      t.string :ipfs, null: false

      t.timestamps
    end
  end
end