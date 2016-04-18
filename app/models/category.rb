class Category < ActiveRecord::Base
  has_many :category_items
  has_many :products, through: :category_items
end
