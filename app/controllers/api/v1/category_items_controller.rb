module Api
  module V1
    class CategoryItemsController < ApplicationController

      def destroy
        CategoryItem.find_by(category_id: params[:category_id], product_id: params[:product_id]).destroy
        render nothing: true
      end

    end
  end
end
