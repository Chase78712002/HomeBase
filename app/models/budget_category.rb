class BudgetCategory < ApplicationRecord
  has_many :transactions
  
  belongs_to :project
end
