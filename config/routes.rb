Rails.application.routes.draw do

  resources :reviews
  resources :orders
  resources :line_items
  resources :category_items
  resources :carts
  resources :categories
  resources :products
  resources :users
  resources :users
  root to: 'application#angular'

end
