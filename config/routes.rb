Rails.application.routes.draw do
  root "landing#index"

  resources :messages, only: [ :index ], path: "/messages"
  resources :comments, only: [ :index ], path: "/comments"
end
