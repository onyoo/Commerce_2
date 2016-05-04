module Api
  module V1
    class ReviewsController < ApplicationController

      def show
        reviews = Review.where(product_id: params[:id])
        render json: reviews, :include => :likers
      end

      def create
        review = Review.create(review_params)
        render json: review, :include => :user
      end

      def update
        review = Review.find(params[:id])
        params[:review][:useful] ? current_user.liked_reviews << review : null
        render json: review, :include => :likers
      end

      private
      def review_params
        params.require(:review).permit(:body, :rating, :product_id, :user_id)
      end

    end
  end
end
