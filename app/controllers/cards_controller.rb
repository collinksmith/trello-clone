class CardsController < ApplicationController
  def index
    @card = Card.all
    render :json
  end
  
  def create
    @card = Card.new(baord_params)

    if @card.save
      render :json
    else
      render :json: @card.errors.full_message, status: 422
    end
  end
  
  def update
    @card = Card.find(params[:id])

    if @card.update
      render :json
    else
      render :json: @card.errors.full_message, status: 422
    end
  end
  
  def show
    @card = Card.find(params[:id])
    render :json
  end
  
  def destroy
    @card = Card.find(params[:id])
    @card.destroy!
    render: json
  end
  
  private
  
  def card_params
    params.require(:card).permit(:title, :description, :ord)
  end
end