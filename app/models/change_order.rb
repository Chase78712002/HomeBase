class ChangeOrder < ApplicationRecord
  has_one :transaction_bill
  
  belongs_to :project
  belongs_to :change_order_status
end
