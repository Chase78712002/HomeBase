class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.string :description
      t.integer :amount
      t.date :date

      t.timestamps
    end
  end
end
