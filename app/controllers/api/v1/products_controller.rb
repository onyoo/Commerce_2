module Api
  module V1
    class ProductsController < ApplicationController

      def create
        product = Product.create(product_params)
        product.set_categories(params['product']['categories'])
        render json: product
      end

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
        if current_user.admin? && params[:product_image]
          product.save_image_url(params)
          render json: {url: product.image_url}
        elsif current_user.admin? && product.update(product_params)
          render json: product
        end
      end

      def destroy
        product = Product.destroy(params[:id])
        render nothing: true, status: 201
      end

    private
      def product_params
        params.require(:product).permit(:product_image, :name, :inventory, :price)
      end

    end
  end
end
