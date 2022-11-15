class Item < ActiveRecord::Base
    has_many :interactions
    has_many :shoppes, through: :interactions
end
