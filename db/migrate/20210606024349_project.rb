class Project < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.date :start_date
      t.date :end_date
      t.references :builder
      t.references :client
      t.timestamps
    end
  end
end
