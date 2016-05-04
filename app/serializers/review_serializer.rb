class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :product_id, :user_id, :rating
  has_many :likers, serializer: LikersSerializer
end
