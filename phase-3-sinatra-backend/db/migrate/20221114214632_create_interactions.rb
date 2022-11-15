class CreateInteractions < ActiveRecord::Migration[6.1]
  def change
    create_table :interactions do |t|
      t.integer :shoppe_id
      t.integer :item_id
      t.string :comment
      t.integer :count
      t.boolean :liked
    end
  end
end
