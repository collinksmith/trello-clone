class CardsController < ApplicationController
  def index
    @card = Card.all
    render json: @card
  end
  
  def create
    @card = Card.new(baord_params)

    if @card.save
      render json: @card
    else
      render :json => @card.errors, :status => :unprocessable_entity
    end
  end
  
  def update
    @card = Card.find(params[:id])

    if @card.update
      render json: @card
    else
      render :json => @card.errors, :status => :unprocessable_entity
    end
  end
  
  def show
    @card = Card.find(params[:id])
    render json: @card
  end
  
  def destroy
    @card = Card.find(params[:id])
    @card.destroy!
    render json: @card
  end
  
  private
  
  def card_params
    params.require(:card).permit(:title, :description, :ord)
  end
end