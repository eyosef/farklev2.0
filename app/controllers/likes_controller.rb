class LikesController < ApplicationController

    def index
        @likes = Like.all 

        render json: @likes
    end
  
    def show
    end
  
    def new
    end
  
    def create
      @like = Like.new;

      @like.amount = (@like.amount + 1);
  
      if @like.save 
        render json: @like
      else 
        render json: { message: "Looks like we couldn't publish your comment. Please try again."}
      end
  
    end
  
  
    def edit
    end
  
    def update
    end
  
    def destroy
    end
  
  end