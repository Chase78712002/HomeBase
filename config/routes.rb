Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    root to: 'landingpage#index'

    # get '/data', to: 'tests#index' <--- from boilerplate

    resources :projects #, only: [:index]
    resources :documents #, only: [:index, :show, :new, :create, :destroy] Everything
    resources :change_orders #, only: [:index, :show, :new, :create, :destroy] Everything]
    resources :transactions #, excepr: [:destory] ?

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
