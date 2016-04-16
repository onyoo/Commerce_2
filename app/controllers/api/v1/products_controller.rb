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
          product.product_image = params[:product_image]
          product.save_url
          render json: {url: product.image_url}
        else
          binding.pry
        end
      end

    end
  end
end
