Rails.application.routes.draw do
  root to: "static_pages#index"

  resources(
    :boards, 
    defaults: {format: :json},
    except: [:new, :edit]
  )
  resources(
    :lists,
    defaults: {format: :json},
    except: [:new, :edit]
  )
  resources(
    :cards,
    defaults: {format: :json},
    except: [:new, :edit]
  )
end
