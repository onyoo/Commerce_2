Rails.application.routes.draw do

  devise_for :users
  root to: 'application#angular'

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :carts
      resources :categories
      resources :orders, only: [:index, :show]
      resources :products, only: [:index, :show, :create, :update, :destroy]
      resources :reviews
    end
  end

  post 'api/v1/carts/:id/checkout' => 'api/v1/carts#checkout'

end
