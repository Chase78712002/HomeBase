class Transaction < ApplicationRecord
  belongs_to :budget_category
  # belongs_to :change_order
  # belongs_to :milestone
end
