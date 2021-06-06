class AddProjectRefToMilestones < ActiveRecord::Migration[6.0]
  def change
    add_reference :milestones, :project, index: true, foreign_key: true
  end
end
