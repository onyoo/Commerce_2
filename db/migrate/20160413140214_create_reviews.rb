class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :body
      t.references :product, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
      t.integer :rating
      t.integer :helpful_score, default: 0

      t.timestamps null: false
    end
  end
end
