class CreateMilestones < ActiveRecord::Migration[6.0]
  def change
    create_table :milestones do |t|
      t.string :description
      t.date :start_date
      t.date :end_date
      t.string :status
      t.boolean :reminder, default: false

      t.timestamps
    end
  end
end
