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
      update_cart_item(line_item, params[:quantity], product)
    else
      self.products << product
      line_item = self.line_items.where(product_id: product.id).first
      update_cart_item(line_item, params[:quantity], product)
      self.save
    end
    product
  end

  def update_cart_item(line_item, quantity, product)
    product.inventory += line_item.quantity
    line_item.quantity = quantity.to_i
    product.inventory -= quantity.to_i
    line_item.save
    product.save
  end

  def self.checkout(id, user)
    cart = self.find(id)
    order = Order.create(user_id: user.id, cart_id: cart.id)
    cart.destroy
  end

end
