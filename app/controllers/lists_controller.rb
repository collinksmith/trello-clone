class ListsController < ApplicationController
  def index
    @lists = List.all
    render json: @lists
  end
  
  def create
    @list = List.new(baord_params)

    if @list.save
      render json: @list
    else
      render :json => @list.errors, :status => :unprocessable_entity
    end
  end
  
  def update
    @list = List.find(params[:id])

    if @list.update
      render json: @lsit
    else
      render :json => @list.errors, :status => :unprocessable_entity
    end
  end
  
  def show
    @list = List.find(params[:id])
    render json: @list
  end
  
  def destroy
    @list = List.find(params[:id])
    @list.destroy!
    render json: @list
  end
  
  private
  
  def list_params
    params.require(:list).permit(:title, :ord)
  end
end

