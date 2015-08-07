Rails.application.routes.draw do
  root to: "staticpages#index"

  resources :boards, except: [:new, :edit]
  resources :lists, except: [:new, :edit]
  resources :cards, except: [:new, :edit]
end
