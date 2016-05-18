class Cart < ActiveRecord::Base
  belongs_to :user
  has_many :line_items,  dependent: :destroy
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
  end

  def remove_product(id)
    product = Product.find(id)
    number_deleted = self.line_items.find_by(product_id: id).quantity
    self.products.delete(product)
    product.inventory += number_deleted
    product.save
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

  def return_items
    self.products.each do |product|
      product.inventory += self.line_items.find_by(product_id: product.id).quantity
      product.save
    end
  end

end
