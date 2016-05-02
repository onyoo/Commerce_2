
user = User.create(name: 'Test', email: 'tim@cambridge.ac.uk', password: 'greyhound', admin:true)
user2 = User.create(name: 'Testy', email: 'tom@cambridge.ac.uk', password: 'greyhound', admin:false)

dog_toy = Product.create(name: 'mechanical rabbit', price: 1000, inventory: 49, product_image_file_name: "Screen_Shot_2016-04-09_at_2.10.52_PM.png", product_image_content_type: "image/png", product_image_file_size: 288932, product_image_updated_at: "2016-04-10 16:36:30", image_url: "/system/products/product_images/000/000/001/original/Screen_Shot_2016-04-09_at_2.10.52_PM.png?1460306190")
dog_bone = Product.create(name: 'dog bone', price: 10, inventory: 50, product_image_file_name: "Screen_Shot_2016-04-09_at_2.11.20_PM.png", product_image_content_type: "image/png", product_image_file_size: 146537, product_image_updated_at: "2016-04-10 16:37:14", image_url: "/system/products/product_images/000/000/002/original/Screen_Shot_2016-04-09_at_2.11.20_PM.png?1460306234")
tennis_ball = Product.create(name: 'tennis ball', price: 1, inventory: 50, product_image_file_name: "Screen_Shot_2016-04-09_at_2.11.40_PM.png", product_image_content_type: "image/png", product_image_file_size: 104372, product_image_updated_at: "2016-04-10 16:37:24", image_url: "/system/products/product_images/000/000/003/original/Screen_Shot_2016-04-09_at_2.11.40_PM.png?1460306244")
dog_treats = Product.create(name: 'dog treats', price: 5, inventory: 50, product_image_file_name: "Screen_Shot_2016-04-09_at_2.14.43_PM.png", product_image_content_type: "image/png", product_image_file_size: 364728, product_image_updated_at: "2016-04-10 16:37:33", image_url: "/system/products/product_images/000/000/004/original/Screen_Shot_2016-04-09_at_2.14.43_PM.png?1460306253")
crash_pad = Product.create(name: 'crash pad', price: 300, inventory: 50, product_image_file_name: "Screen_Shot_2016-04-09_at_2.12.57_PM.png", product_image_content_type: "image/png", product_image_file_size: 139400, product_image_updated_at: "2016-04-10 16:37:43", image_url: "/system/products/product_images/000/000/005/original/Screen_Shot_2016-04-09_at_2.12.57_PM.png?1460306263")
la_sortiva = Product.create(name: 'la Sportiva Skwama', price: 200, inventory: 50, product_image_file_name: "Screen_Shot_2016-04-09_at_2.12.19_PM.png", product_image_content_type: "image/png", product_image_file_size: 242949, product_image_updated_at: "2016-04-10 16:37:54", image_url: "/system/products/product_images/000/000/006/original/Screen_Shot_2016-04-09_at_2.12.19_PM.png?1460306274")

dog_toys_cat = Category.create(name:'Dog Toys')
climbing_cat = Category.create(name:'Climbing Gear')
coumputer_cat = Category.create(name:'Computers')
cycling_cat = Category.create(name:'Cycling')

category_item = CategoryItem.create(category_id: dog_toys_cat.id, product_id: dog_toy.id)
category_item = CategoryItem.create(category_id: dog_toys_cat.id, product_id: dog_bone.id)
category_item = CategoryItem.create(category_id: dog_toys_cat.id, product_id: tennis_ball.id)
category_item = CategoryItem.create(category_id: dog_toys_cat.id, product_id: dog_treats.id)

category_item = CategoryItem.create(category_id: climbing_cat.id, product_id: crash_pad.id)
category_item = CategoryItem.create(category_id: climbing_cat.id, product_id: la_sortiva.id)

cart = Cart.create(user_id: user.id)

line_item = LineItem.create(quantity: 1, product_id: dog_toy.id, cart_id: cart.id)

order = Order.create(user_id: user.id, cart_id: cart.id)

review = Review.create(product_id: dog_toy.id, user_id: user.id, body: 'my dog loved chasing this rabbit all day', rating: 10)
