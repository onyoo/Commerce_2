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
        if params[:remove_id]
          cart.remove_product(params[:remove_id])
        else
          cart.add_product(params)
        end
        render json: cart
      end

      def destroy
        cart = Cart.find(params[:id])
        cart.return_items
        cart.destroy
        render nothing: true, status: 202
      end

      def checkout
        Cart.checkout(params[:id], current_user)
        render nothing: true, status: 202
      end

    end
  end
end
