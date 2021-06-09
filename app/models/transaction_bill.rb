class TransactionBill < ApplicationRecord
  belongs_to :budget_category
  belongs_to :change_order, optional: true
  belongs_to :milestone, optional: true
end
