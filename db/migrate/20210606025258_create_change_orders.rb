class CreateChangeOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :change_orders do |t|
      t.string :description
      t.integer :cost
      t.boolean :approval, default: false
      t.string :path
      t.timestamps
    end
  end
end
