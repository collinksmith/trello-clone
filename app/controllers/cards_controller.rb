class CardsController < ApplicationController
  def index
    @cards = Card.all
    render :index
  end
  
  def create
    @card = Card.new(card_params)

    if @card.save
      render :show
    else
      render :json => @card.errors, :status => :unprocessable_entity
    end
  end
  
  def update
    @card = Card.find(params[:id])

    if @card.update
      render :show
    else
      render :json => @card.errors, :status => :unprocessable_entity
    end
  end
  
  def show
    @card = Card.find(params[:id])
    render :show
  end
  
  def destroy
    @card = Card.find(params[:id])
    @card.destroy!
    render :show
  end
  
  private
  
  def card_params
    params.require(:card).permit(:title, :description, :ord)
  end
end