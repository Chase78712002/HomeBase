class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.date :start_date
      t.date :end_date
      t.string :image

      t.belongs_to :builder, null: false, foreign_key: true
      t.belongs_to :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
