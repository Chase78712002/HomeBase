Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'projects#index'

  namespace :api do # /api/data

    # root to: 'landingpage#index' is same as path to '/'

    get '/', to: 'tests#index' #<--- from boilerplate
    
    
    # These routes will be for signup. The first renders a form in the browse, the second will 
    # receive the form and create a user in our database using the data given to us by the user.
    get '/signup' => 'builders#new'
    get '/signup' => 'clients#new'
    post 'builders' => 'builders#create'
    post 'clients' => 'clients#create'

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
