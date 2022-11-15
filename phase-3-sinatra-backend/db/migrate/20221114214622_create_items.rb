     class CreateItems < ActiveRecord::Migration[6.1]
       def change
          create_table :items do |t|
               t.string :name
               t.string :img_url
               t.string :description
               t.string :category
               t.float :price
          end
       end
     end
