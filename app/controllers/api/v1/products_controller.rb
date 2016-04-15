module Api
  module V1
    class ProductsController < ApplicationController

      def index
        product = Product.all
        render json: product
      end

    end
  end
end
