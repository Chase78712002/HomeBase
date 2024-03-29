class CreateChangeOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :change_orders do |t|
      t.string :description
      t.integer :cost
      t.string :path

      t.belongs_to :change_order_status, null: false, foreign_key: true
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
