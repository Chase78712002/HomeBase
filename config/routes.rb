Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'projects#index'

  namespace :api do # /api/data

    # root to: 'landingpage#index' is same as path to '/'

    get '/data', to: 'tests#index' #<--- from boilerplate

    resources :projects, only: [:index, :show]
    resources :documents, only: [:index, :create, :update, :destroy]
    resources :change_orders, only: [:index, :create, :update, :destroy]
    resources :milestones, only: [:index, :create, :update, :destroy]

    resources :transaction_bills, except: [:new, :edit]
    resources :budget_categories, except: [:new, :edit]


  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
