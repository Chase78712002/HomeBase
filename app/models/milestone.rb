class Milestone < ApplicationRecord
  has_one :transaction_bill
  
  belongs_to :project
end
