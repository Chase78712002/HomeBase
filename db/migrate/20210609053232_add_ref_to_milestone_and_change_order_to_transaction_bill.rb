class AddRefToMilestoneAndChangeOrderToTransactionBill < ActiveRecord::Migration[6.0]
  def change
    add_reference :transaction_bills, :milestone, null: true, foreign_key: true
    add_reference :transaction_bills, :change_order, null: true, foreign_key: true
  end
end
