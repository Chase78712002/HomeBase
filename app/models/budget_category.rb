class BudgetCategory < ApplicationRecord
  has_many :transaction_bills
  
  belongs_to :project

  validates :description, :estimate_amount, presence: true

end
