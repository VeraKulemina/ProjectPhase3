class AddPasswordColumnToShoppe < ActiveRecord::Migration[6.1]
  def change
    add_column :shoppes, :password, :string
  end
end
