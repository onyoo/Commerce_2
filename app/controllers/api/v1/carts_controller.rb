module API
  module v1
    class CartsController < ApplicationController
      respond_to :json

      def show
        carts = Cart.where(user_id: params[:id])
        binding.pry
        respond_with carts
      end

    end
  end
end
