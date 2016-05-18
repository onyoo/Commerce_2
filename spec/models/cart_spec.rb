require 'rails_helper'

RSpec.describe Cart, type: :model do
  it { should respond_to :user }
  it { should respond_to :line_items }
  it { should respond_to :products }

  before(:each) do
    @cart = User.create(name: "rob", email: "rob@gmail.com", password: "secure_i_am").carts.build
    @product = Product.create(name: 'mechanical rabbit', price: 1000, inventory: 49, product_image_file_name: "Screen_Shot_2016-04-09_at_2.10.52_PM.png", product_image_content_type: "image/png", product_image_file_size: 288932, product_image_updated_at: "2016-04-10 16:36:30", image_url: "/system/products/product_images/000/000/001/original/Screen_Shot_2016-04-09_at_2.10.52_PM.png?1460306190")
  end

  describe "#add_product" do
    it "can add a product" do
      @cart.add_product(product_id: @product.id, quantity: 1)
    end
  end
end
