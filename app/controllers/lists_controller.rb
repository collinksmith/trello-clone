class ListsController < ApplicationController
  def index
    @lists = List.all
    render :index
  end
  
  def create
    @list = List.new(list_params)

    if @list.save
      render :show
    else
      render :json => @list.errors, :status => :unprocessable_entity
    end
  end
  
  def update
    @list = List.find(params[:id])

    if @list.update(list_params)
      render :show
    else
      render :json => @list.errors, :status => :unprocessable_entity
    end
  end
  
  def show
    @list = List.find(params[:id])
    render :show
  end
  
  def destroy
    @list = List.find(params[:id])
    @list.destroy!
    render :show
  end
  
  private
  
  def list_params
    params.require(:list).permit(:title, :ord, :board_id)
  end
end

