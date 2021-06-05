class CreateChangeOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :change_orders do |t|
      t.string :description
      t.int :cost
      t.boolean :approval
      t.str :path

      t.timestamps
    end
  end
end
