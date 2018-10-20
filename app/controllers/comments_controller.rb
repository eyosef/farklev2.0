class CommentsController < ApplicationController

  # might only need create, update, destroy...?

  def index
    @comments = Comment.all 

    render json: @comments
  end

  def show
    @comments = Comment.all 

    render json: @comment, include: ['user']
  end

  def new
  end

  def create
    @comments = Comment.all 
    @comment = Comment.new
    @comment.username = params["comment"]["username"]
    @comment.email = params["comment"]["email"]
    @comment.comment = params["comment"]["comment"]

    if @comment.save 
      render json: @comment
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