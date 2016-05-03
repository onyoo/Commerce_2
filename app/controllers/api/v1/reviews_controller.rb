module Api
  module V1
    class ReviewsController < ApplicationController

      def show
        reviews = Review.where(product_id: params[:id])
        render json: reviews
      end

      def create
        review = Review.create(review_params)
        render json: review, :include => :user
      end

      def update
        review = Review.find(params[:id])
        params[:useful] ? review.update(helpful_score: (review.helpful_score + 1)) : null
        render json: review
      end

      private
      def review_params
        params.require(:review).permit(:body, :rating, :product_id, :user_id)
      end

    end
  end
end
