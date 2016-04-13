class CreateCategoryItems < ActiveRecord::Migration
  def change
    create_table :category_items do |t|
      t.references :product, index: true, foreign_key: true
      t.references :category, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
