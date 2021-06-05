class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.string :description
      t.integer :amount
      t.date :date
      t.references :budget_category, index: true, foreign_key: true
      t.references :change_order, index: true, foreign_key: true
      t.references :milestone, index: true, foreign_key: true
      t.timestamps
    end
  end
end
