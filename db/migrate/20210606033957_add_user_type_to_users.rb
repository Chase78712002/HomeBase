class AddUserTypeToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :user_types, index: true, foreign_key: true
  end
end
