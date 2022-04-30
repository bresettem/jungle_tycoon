class AddThumbToImage < ActiveRecord::Migration[7.0]
  def change
    add_column :images, :thumbnail, :string, null: false
  end
end