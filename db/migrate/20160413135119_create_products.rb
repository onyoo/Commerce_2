class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.integer :inventory
      t.string :image_url

      t.timestamps null: false
    end
  end
end
