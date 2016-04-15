class Cart < ActiveRecord::Base
  belongs_to :user
  has_many :line_items
  has_many :products, through: :line_items

  def add_product(product)
    if line_item = self.line_items.detect{|li| li.product_id == product.id}
      line_item.quantity += 1
      product.inventory -= 1
      line_item.save
      product.save
    else
      self.products << product
      self.save
    end
  end
end
