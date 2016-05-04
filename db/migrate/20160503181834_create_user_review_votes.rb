class CreateUserReviewVotes < ActiveRecord::Migration
  def change
    create_table :user_review_votes do |t|
      t.references :user, index: true, foreign_key: true
      t.references :review, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
