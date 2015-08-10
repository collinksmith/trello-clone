class BoardsController < ApplicationController
  def index
    @boards = Board.all
    render :index
  end
  
  def create
    @board = Board.new(board_params)

    if @board.save
      render :show
    else
      render :json => @board.errors, :status => :unprocessable_entity
    end
  end
  
  def update
    @board = Board.find(params[:id])

    if @board.update(board_params)
      render :show
    else
      render :json => @board.errors, :status => :unprocessable_entity
    end
  end
  
  def show
    @board = Board.find(params[:id])
    render :show
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
