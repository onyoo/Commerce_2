Rails.application.routes.draw do

  devise_for :users
  root to: 'application#angular'

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :carts
      resources :categories, only: [:index, :show, :create, :destroy, :update]
      resources :orders, only: [:index, :show]
      resources :products, only: [:index, :show, :create, :update, :destroy]
      resources :reviews, only: [:show, :create, :update]
    end
  end

  post 'api/v1/carts/:id/checkout' => 'api/v1/carts#checkout'

end
