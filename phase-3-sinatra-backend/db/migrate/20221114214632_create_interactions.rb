class CreateInteractions < ActiveRecord::Migration[6.1]
  def change
    create_table :interactions do |t|
      t.integer :user_id
      t.integer :item_id
      t.string :commment
      t.integer :count
      t.boolean :liked
    end
  end
end
