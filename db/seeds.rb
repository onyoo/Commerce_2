user = User.create(name: 'Test', email: 'tim@cambridge.ac.uk', password: 'greyhound')

dog_toy = Product.create(name: 'mechanical rabbit', price: 1000, inventory: 49, product_image_file_name: "Screen_Shot_2016-04-09_at_2.10.52_PM.png", product_image_content_type: "image/png", product_image_file_size: 288932, product_image_updated_at: "2016-04-10 16:36:30", image_url: "/system/products/product_images/000/000/001/original/Screen_Shot_2016-04-09_at_2.10.52_PM.png?1460306190")
dog_bone = Product.create(name: 'dog bone', price: 10, inventory: 50)
tennis_ball = Product.create(name: 'tennis ball', price: 1, inventory: 49)
dog_treats = Product.create(name: 'dog treats', price: 5, inventory: 50)
crash_pad = Product.create(name: 'crash pad', price: 300, inventory: 49)
la_sortiva = Product.create(name: 'la Sportiva Skwama', price: 200, inventory: 50)

dog_toys_cat = Category.create(name:'Dog Toys')
climbing_cat = Category.create(name:'Climbing Gear')

category_item = CategoryItem.create(category_id: dog_toys_cat.id, product_id: dog_toy.id)
category_item = CategoryItem.create(category_id: dog_toys_cat.id, product_id: dog_bone.id)
category_item = CategoryItem.create(category_id: dog_toys_cat.id, product_id: tennis_ball.id)
category_item = CategoryItem.create(category_id: dog_toys_cat.id, product_id: dog_treats.id)

category_item = CategoryItem.create(category_id: climbing_cat.id, product_id: crash_pad.id)
category_item = CategoryItem.create(category_id: climbing_cat.id, product_id: la_sortiva.id)

cart = Cart.create(user_id: user.id)

line_item = LineItem.create(product_id: dog_toy.id, cart_id: cart.id)
line_item = LineItem.create(product_id: tennis_ball.id, cart_id: cart.id)
line_item = LineItem.create(product_id: crash_pad.id, cart_id: cart.id)

order = Order.create(user_id: user.id, cart_id: cart.id)

review = Review.create(product_id: dog_toy.id, user_id: user.id, body: 'my dog loved chasing this rabbit all day', rating: 10)
