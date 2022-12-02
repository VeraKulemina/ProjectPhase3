class Item < ActiveRecord::Base
    has_many :interactions
    has_many :shoppes, through: :interactions

    def self.price_ascending
        puts(self.all.order(price: :asc))
        self.all.order(price: :asc).first
    end

    def self.price_descending
        self.all.order(price: :desc)
    end

    
end
