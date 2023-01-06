Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    resources :greeting, only: [:index]
  end
end
