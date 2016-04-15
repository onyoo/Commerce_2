module Api
  module V1
    class CartsController < ApplicationController

      def show
        cart = Cart.find(params[:id])
        render json: cart.products
      end

      def index
        carts = Cart.all
        render json: carts
      end

      def create
        render json: Cart.create(user_id: current_user.id)
      end

    end
  end
end
