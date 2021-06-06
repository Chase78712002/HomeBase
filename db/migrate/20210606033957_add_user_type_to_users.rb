class AddUserTypeToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :user_type, index: true, foreign_key: true
  end
end
