class Cart < ActiveRecord::Base
  belongs_to :user
  has_many :line_items
  has_many :products, through: :line_items

  def add_product(params)
    if params[:product_id]
      product = Product.find(params[:product_id])
    else
      product = Product.find(params[:product][:id])
    end
    if line_item = self.line_items.detect{|li| li.product_id == product.id}
      previous_quantity = line_item.quantity
      line_item.quantity = params[:quantity]
      product.inventory + previous_quantity - line_item.quantity
      line_item.save
      product.save
    else
      self.products << product
      self.line_items.where()
      self.save
    end
    product
  end
end
