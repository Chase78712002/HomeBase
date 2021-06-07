class AddColumnsToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :builder_id, :integer
    add_column :projects, :client_id, :integer
  end
end
