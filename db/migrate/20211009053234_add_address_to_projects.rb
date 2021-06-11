class AddAddressToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :address, :string
  end
end
