class BoardsController < ApplicationController
  def index
    @boards = Board.all
    render json: @boards
  end
  
  def create
    @board = Board.new(board_params)

    if @board.save
      render json: @board
    else
      render :json => @board.errors, :status => :unprocessable_entity
    end
  end
  
  def update
    @board = Board.find(params[:id])

    if @board.update
      render json: @board
    else
      render :json => @board.errors, :status => :unprocessable_entity
    end
  end
  
  def show
    @board = Board.find(params[:id])
    render json: @board
  end
  
  def destroy
    @board = Board.find(params[:id])
    @board.destroy!
    render json: @board
  end
  
  private
  
  def board_params
    params.require(:board).permit(:title)
  end
end
