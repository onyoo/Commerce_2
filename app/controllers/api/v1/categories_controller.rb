module Api
  module V1
    class CategoriesController < ApplicationController

      def index
        categories = Category.all
        render json: categories
      end

      def show
        products = Category.find(params[:id]).products
        render json: products
      end

      def create
        category = Category.find_or_create_by(name: params[:name])
        render json: category
      end

      def update
        category = Category.find(params[:id])
        product = Product.find(params[:product][:id])
        category.products << product
        render json: category
      end

      def destroy
        category = Category.destroy(params[:id])
        render json: category
      end

    end
  end
end
