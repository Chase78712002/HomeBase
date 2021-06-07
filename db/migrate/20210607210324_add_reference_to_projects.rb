class AddReferenceToProjects < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :projects, :users
  end
end
