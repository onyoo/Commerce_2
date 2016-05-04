class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :admin
  has_many :liked_reviews, serializer: ReviewSerializer
end
