class ShoppeController < ApplicationController
  get '/shoppes' do
    Shoppe.all.to_json
  end

  post '/shoppes' do
      shoppe = Shoppe.create(
        name: params[:name],
        category: params[:category],
        description: params[:description],
        price: params[:price],
        img_url: 'https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Beautiful-Selenite-Heart-Miner-310718956_2.jpg?v=1621235125'
      )
      shoppe.to_json
  end

  get '/shoppes/:id' do
    shoppe = Shoppe.find(params[:id])
    shoppe.to_json
  end

  patch '/shoppes/:id' do
      shoppe = Shoppe.find(params[:id]).update(name: params[:name], address: params[:address], password: params[:password])
      shoppe.to_json
  end

  delete '/shoppes/:id' do
      shoppe = Shoppe.find(params[:id]).destroy
      shoppe.to_json
  end

  get "/shoppes/:id/interactions" do 
    interactions = Shoppe.find(params[:id]).interactions
    interactions.to_json
  end

  
end