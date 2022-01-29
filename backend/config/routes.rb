Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :projects do
        resources :logs
        resources :goals
      end
      resources :goals do
        resources :tasks
      end
    end
  end
end
