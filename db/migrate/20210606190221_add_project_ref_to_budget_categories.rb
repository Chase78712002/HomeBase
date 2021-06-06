class AddProjectRefToBudgetCategories < ActiveRecord::Migration[6.0]
  def change
    add_reference :budget_categories, :project, index: true, foreign_key: true
  end
end
