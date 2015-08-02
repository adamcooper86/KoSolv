Rails.application.routes.draw do

  ACCEPTS_JSON = lambda { |request|
    request.accepts.include?(:json)
  }

  scope constraints: ACCEPTS_JSON do
    resources :questions, except: [:new, :edit]
    resources :users,     except: [:new, :edit]
  end

  get '*path',   to: 'public#show'
  root           to: 'public#show'

end
