class BoardsController < ApplicationController
  def index
    @boards = Board.all
    render :json
  end
  
  def create
    @board = Board.new(baord_params)

    if @board.save
      render :json
    else
      render :json: @board.errors.full_message, status: 422
    end
  end
  
  def update
    @board = Board.find(params[:id])

    if @board.update
      render :json
    else
      render :json: @board.errors.full_message, status: 422
    end
  end
  
  def show
    @board = Board.find(params[:id])
    render :json
  end
  
  def destroy
    @board = Board.find(params[:id])
    @board.destroy!
    render: json
  end
  
  private
  
  def board_params
    params.require(:board).permit(:title)
  end
end
