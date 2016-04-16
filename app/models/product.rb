class Product < ActiveRecord::Base

  has_attached_file :product_image
  validates_attachment_content_type :product_image, content_type: /\Aimage\/.*\Z/

  def save_url
    self.image_url = self.product_image.url
    self.save
  end
end
