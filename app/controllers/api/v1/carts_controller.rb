module Api
  module V1
    class CartsController < ApplicationController

      def show
        cart = Cart.find(params[:id])
        render json: [cart.products, cart.line_items]
      end

      def index
        carts = Cart.where(user_id: current_user.id)
        render json: carts
      end

      def create
        render json: Cart.create(user_id: current_user.id)
      end

      def update
        cart = Cart.find(params[:id])
        product = cart.add_product(params)
        render json: cart
      end

      def destroy
        Cart.destroy(params[:id])
        render nothing: true, status: 202
      end

    end
  end
end
