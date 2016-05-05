class Product < ActiveRecord::Base
  has_many :category_items
  has_many :categories, through: :category_items
  has_many :reviews

  has_attached_file :product_image
  validates_attachment_content_type :product_image, content_type: /\Aimage\/.*\Z/

  def save_image_url(params)
    self.product_image = params[:product_image]
    self.image_url = self.product_image.url
    self.save
  end

  def set_categories(categories)
    if !categories.nil?
      categories.each{|cat| self.categories << Category.find(cat['id'])}
    end
  end
end
