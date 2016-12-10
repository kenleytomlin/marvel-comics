Rails.application.routes.draw do
  namespace :v1 do
  end

  namespace :v1 do
    get 'characters', :to => '/v1/characters#index'
    get 'comics', :to => '/v1/comics#index'
    get 'comics/votes', :to => '/v1/comics#votes'
    post 'comics/:comic_id/upvote', :to => '/v1/comics#upvote'
    delete 'comics/:comic_id/downvote', :to => '/v1/comics#downvote'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
