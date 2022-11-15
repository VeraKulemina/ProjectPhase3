class Interaction < ActiveRecord::Base
    belongs_to :shoppe 
    belongs_to :item
    
end