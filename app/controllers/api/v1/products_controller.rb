module Api
  module V1
    class ProductsController < ApplicationController

      def index
        product = Product.all
        render json: product
      end

      def show
        product = Product.find(params[:id])
        render json: product
      end

      def update
        product = Product.find(params[:id])
        if params[:product_image]
          product.save_image_url(params)
          render json: {url: product.image_url}
        elsif product.update(product_params)
          render json: product
        end
      end

    private
      def product_params
        params.require(:product).permit(:product_image, :name, :inventory, :price)
      end

    end
  end
end
