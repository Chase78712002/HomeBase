class AddActualAmountToBudgetCategories < ActiveRecord::Migration[6.0]
  def change
    add_column :budget_categories, :actual_amount, :integer
  end
end
