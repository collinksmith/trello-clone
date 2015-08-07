class ListsController < ApplicationController
  def index
    @lists = List.all
    render :json
  end
  
  def create
    @list = List.new(baord_params)

    if @list.save
      render :json
    else
      render :json: @list.errors.full_message, status: 422
    end
  end
  
  def update
    @list = List.find(params[:id])

    if @list.update
      render :json
    else
      render :json: @list.errors.full_message, status: 422
    end
  end
  
  def show
    @list = List.find(params[:id])
    render :json
  end
  
  def destroy
    @list = List.find(params[:id])
    @list.destroy!
    render: json
  end
  
  private
  
  def list_params
    params.require(:list).permit(:title, :ord)
  end
end

