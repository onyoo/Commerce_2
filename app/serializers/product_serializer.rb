class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :inventory, :image_url, :created_at, :updated_at
  has_many :reviews
  has_many :categories
end
