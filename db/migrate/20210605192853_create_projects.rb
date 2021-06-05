class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.date :start_date
      t.date :end_date
      t.string :image
      t.references :builder, index: true, foreign_key: { to_table :users}
      t.references :client, index: true, foreign_key: { to_table :users}
      t.timestamps
    end
  end
end
