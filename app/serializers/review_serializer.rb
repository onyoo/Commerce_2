class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :product_id, :user_id, :rating, :created_at
  has_one :user, serializer: LikersSerializer
  has_many :likers, serializer: LikersSerializer
end
