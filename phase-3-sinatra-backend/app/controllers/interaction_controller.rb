class InteractionController < ApplicationController
  get '/interactions' do 
    Interaction.all.to_json
  end
  
end