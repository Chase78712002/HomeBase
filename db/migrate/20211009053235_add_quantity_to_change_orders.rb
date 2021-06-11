class AddQuantityToChangeOrders < ActiveRecord::Migration[6.0]
  def change
    add_column :change_orders, :quantity, :integer
  end
end
