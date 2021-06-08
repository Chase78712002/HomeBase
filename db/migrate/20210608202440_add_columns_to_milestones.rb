class AddColumnsToMilestones < ActiveRecord::Migration[6.0]
  def change
    add_column :milestones, :color, :string
    add_column :milestones, :status_color, :string
  end
end
