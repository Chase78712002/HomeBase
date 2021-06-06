class AddFkRefsToTransactions < ActiveRecord::Migration[6.0]
  def change
    add_reference :transactions, :change_order, index: true, foreign_key: true
    add_reference :transactions, :budget_category, index: true, foreign_key: true
    add_reference :transactions, :milestone, index: true, foreign_key: true
  end
end
