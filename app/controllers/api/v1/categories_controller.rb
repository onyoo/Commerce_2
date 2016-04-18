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

    end
  end
end
