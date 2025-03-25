Rails.application.routes.draw do
  root "landing#index"

  get "/messages.html", to: "landing#messages", format: false
end
