Rails.application.routes.draw do

  ACCEPTS_JSON = lambda { |request|
    request.accepts.include?(:json)
  }

  scope constraints: ACCEPTS_JSON do
    resources :questions, except: [:new, :edit]
    resources :solutions, except: [:new, :edit]
    resources :answers,   except: [:new, :edit]
    resources :users,     only: [:create]
    get '/current', to: 'users#current'
  end

  get '*path',   to: 'public#show'
  root           to: 'public#show'

end
