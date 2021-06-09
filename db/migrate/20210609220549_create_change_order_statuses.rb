class CreateChangeOrderStatuses < ActiveRecord::Migration[6.0]
  def change
    create_table :change_order_statuses do |t|
      t.string :status

      t.timestamps 
    end
  end
end
