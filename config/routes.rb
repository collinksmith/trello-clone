Rails.application.routes.draw do
  root to: "static_pages#index"

  resources :boards, except: [:new, :edit]
  resources :lists, except: [:new, :edit]
  resources :cards, except: [:new, :edit]
end
