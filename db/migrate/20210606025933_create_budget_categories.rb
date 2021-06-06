class CreateBudgetCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :budget_categories do |t|
      t.string :description
      t.integer :estimate_amount

      t.timestamps
    end
  end
end
