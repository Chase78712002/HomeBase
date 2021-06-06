class AddProjectRefToChangeOrder < ActiveRecord::Migration[6.0]
  def change
    add_reference :change_orders, :project, index: true, foreign_key: true
  end
end
