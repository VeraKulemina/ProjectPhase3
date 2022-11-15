class CreateShoppes < ActiveRecord::Migration[6.1]
  def change
    create_table :shoppes do |t|
      t.string :name
      t.string :address
      t.string :img_url
    end
  end
end
