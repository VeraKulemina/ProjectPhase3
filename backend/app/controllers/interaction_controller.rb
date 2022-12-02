class InteractionController < ApplicationController
  get '/interactions' do 
    Interaction.all.to_json
  end
  
  post '/interactions' do
    item = Interaction.create(
      shoppe_id: params[:shoppe_id],
      item_id: params[:item_id],
      comment: params[:comment],
      count: params[:count],
      liked: params[:liked]
    )
    item.to_json
  end

  get "/interactions/:id" do 
    interactions = Shoppe.find(params[:id]).interactions
    interactions.to_json
  end 

  patch '/interactions/:id' do
    interaction = Interaction.find(params[:id]).update(liked: params[:liked], count: params[:count], item_id: params[:item_id], shoppe_id: params[:shoppe_id], comment: params[:comment])
    interaction.to_json
  end

  delete '/interactions/:id' do
    interaction = Interaction.find(params[:id]).destroy
    interaction.to_json
  end

end