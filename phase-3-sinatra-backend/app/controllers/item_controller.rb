require 'pry'

class ItemController < ApplicationController
    get '/items' do 
        list = Item.all
        list.to_json
    end
    
    post '/items' do
        item = Item.create(
          name: params[:name],
          category: params[:category],
          description: params[:description],
          price: params[:price],
          img_url: 'https://cdn.shopify.com/s/files/1/0273/4214/3566/files/bigstock-Beautiful-Selenite-Heart-Miner-310718956_2.jpg?v=1621235125'
        )
        item.to_json
    end
    
    patch '/items/:id' do
        item = Item.find(params[:id]).update(price: params[:price])
        item.to_json
    end

    delete '/items/:id' do
        item = Item.find(params[:id]).destroy
        item.to_json
    end

    get '/items/price_ascending' do
        items = Item.price_ascending
        items.to_json
    end

    get '/items/price_descending' do
        items = Item.price_descending
        items.to_json
    end

    get '/items/:category' do
        items = Item.all.where(category: params[:category])
        items.to_json
    end

  
end