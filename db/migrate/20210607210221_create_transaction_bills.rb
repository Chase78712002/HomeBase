class CreateTransactionBills < ActiveRecord::Migration[6.0]
  def change
    create_table :transaction_bills do |t|
      t.string :description
      t.integer :amount
      t.date :date

      t.belongs_to :change_order, null: false, foreign_key: true
      t.belongs_to :milestone, null: false, foreign_key: true
      t.belongs_to :budget_category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
