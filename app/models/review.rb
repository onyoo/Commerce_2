class Review < ActiveRecord::Base
  belongs_to :product
  belongs_to :user
  has_many :user_review_votes, dependent: :destroy
  has_many :likers, through: :user_review_votes, source: :user
end
