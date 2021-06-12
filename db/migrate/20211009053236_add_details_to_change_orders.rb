class AddDetailsToChangeOrders < ActiveRecord::Migration[6.0]
  def change
    add_column :change_orders, :details, :string
  end
end
