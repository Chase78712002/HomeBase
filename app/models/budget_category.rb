class BudgetCategory < ApplicationRecord
  has_many :transaction_bills
  
  belongs_to :project
end
