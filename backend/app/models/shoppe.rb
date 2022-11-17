class Shoppe < ActiveRecord::Base
    has_many :interactions
    has_many :items, through: :interactions
end