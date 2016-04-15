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

    end
  end
end
